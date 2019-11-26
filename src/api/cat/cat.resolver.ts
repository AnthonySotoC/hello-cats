import {
  Resolver,
  Query,
  Args,
  Mutation,
  ResolveProperty,
  Parent,
} from '@nestjs/graphql';
import { CatService } from './cat.service';
import { Cat } from './model/cat';
import { NotFoundException } from '@nestjs/common';
import { CatArgs } from './dto/cat.args';
import { HumanService } from '../human/human.service';

import { CreateCatInput } from './dto/create-cat.input';
import { Human } from '../../api/human/model/human';

@Resolver(of => Cat)
export class CatResolver {
  constructor(
    private readonly catService: CatService,
    private readonly humanService: HumanService,
  ) {}

  @Query(of => [Cat])
  public cats(@Args() catArgs: CatArgs): Promise<Cat[]> {
    return this.catService.findAll(catArgs);
  }

  @Query(of => Cat)
  public cat(@Args('id') id: string): Promise<Cat> {
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
  public deleteCat(@Args('id') id: string) {
    return this.catService.remove(id);
  }

  @ResolveProperty('owner', () => Human)
  async getOwner(@Parent() cat: Cat): Promise<Human> {
    return this.humanService.findOneById(cat.id);
  }
}
