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
import { CreateCatInput } from './dto/create-cat.input';
import { Human } from 'src/api/humans/model/human';
import { HumansService } from 'src/api/humans/humans.service';

@Resolver('Cats')
export class CatsResolver {
  constructor(
    private readonly catsService: CatsService,
    private readonly humansService: HumansService,
  ) {}

  @Query(returns => Cat)
  public cat(@Args('id') id: string): Cat {
    const recipe = this.catsService.findOneById(id);
    if (!recipe) {
      throw new NotFoundException(id);
    }
    return recipe;
  }

  @Query(returns => [Cat])
  public cats(@Args() catArgs: CatArgs): Cat[] {
    return this.catsService.findAll(catArgs);
  }

  @Mutation(returns => Cat)
  public createCat(@Args('data') data: CreateCatInput): Cat {
    return this.catsService.create(data);
  }

  @Mutation(returns => Boolean)
  public deleteCat(@Args('id') id: string) {
    return this.catsService.remove(id);
  }

  @ResolveProperty('owner')
  public getOwner(@Parent() cat: Cat): Human {
    return this.humansService.findOneById(cat.id);
  }
}

/*return this.context.dataloader
  .bind(this.batchOwners.getAll, args)
  .load(parent.id);*/
