import {
  Resolver,
  Query,
  Args,
  Mutation,
  ResolveProperty,
  Parent,
} from '@nestjs/graphql';
import { CatsService } from './cats.service';
import { Cat } from './model/cat';
import { NotFoundException } from '@nestjs/common';
import { CatArgs } from './dto/cat.args';
import { HumansService } from '../humans/humans.service';

import { CreateCatInput } from './dto/create-cat.input';
import { Human } from 'src/api/humans/model/human';

@Resolver(of => Cat)
export class CatsResolver {
  constructor(
    private readonly catsService: CatsService,
    private readonly humansService: HumansService,
  ) {}

  @Query(returns => [Cat])
  public cats(@Args() catArgs: CatArgs): Promise<Cat[]> {
    return this.catsService.findAll(catArgs);
  }

  @Query(returns => Cat)
  public cat(@Args('id') id: string): Promise<Cat> {
    const cat = this.catsService.findOneById(id);
    if (!cat) {
      throw new NotFoundException(id);
    }
    return cat;
  }

  @Mutation(returns => Cat)
  public createCat(@Args('data') data: CreateCatInput): Promise<Cat> {
    return this.catsService.create(data);
  }

  @Mutation(returns => Boolean)
  public deleteCat(@Args('id') id: string) {
    return this.catsService.remove(id);
  }

  @ResolveProperty('owner', () => Human)
  async getOwner(@Parent() cat) : Promise<Human> {
    return  this.humansService.findOneById(cat.id);
  }
}

/*return this.context.dataloader
  .bind(this.batchOwners.getAll, args)
  .load(parent.id);*/
