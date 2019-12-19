import {
  Resolver,
  Query,
  Args,
  Mutation,
  ResolveProperty,
  Parent,
} from '@nestjs/graphql';
import { NotFoundException } from '@nestjs/common';
import * as Dataloader from 'dataloader';

import { Cat } from './model/cat';
import { CatArgs } from './dto/cat.args';
import { CatService } from './cat.service';
import { CreateCatInput } from './dto/create-cat.input';

import { Human } from '../../api/human/model/human';
import { HumanService } from '../human/human.service';

import { DataloaderService } from '../../shared/modules/dataloader/dataloader.service';

@Resolver(of => Cat)
export class CatResolver {
  private readonly humanDataloader: Dataloader<number, Human[]>;

  constructor(
    private readonly catService: CatService,
    private readonly humanService: HumanService,
    private readonly dataloaderService: DataloaderService,
  ) {
    this.humanDataloader = this.dataloaderService.createDataloader({
      findAll: this.humanService.batch,
      filterBy: 'id',
    });
  }

  @Query(of => [Cat])
  public cats(@Args() catArgs: CatArgs): Promise<Cat[]> {
    return this.catService.findAll(catArgs);
  }

  @Query(of => Cat)
  public cat(@Args('id') id: number): Promise<Cat> {
    const cat = this.catService.findOneById(id);
    if (!cat) {
      throw new NotFoundException(id);
    }
    return cat;
  }

  @Mutation(of => Cat)
  public createCat(@Args('data') data: CreateCatInput): Promise<Cat> {
    return this.catService.create(data);
  }

  @Mutation(of => Boolean)
  public deleteCat(@Args('id') id: number) {
    return this.catService.remove(id);
  }

  @ResolveProperty(() => Human)
  async human(@Parent() cat: Cat): Promise<Human> {
    const owners = await this.humanDataloader.load(cat.humanId || -1);
    return owners.shift();
  }
}
