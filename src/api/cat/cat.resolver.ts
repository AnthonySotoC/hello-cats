import { Resolver, Query, Args, Mutation, ResolveProperty, Parent } from '@nestjs/graphql';
import { NotFoundException, UseGuards } from '@nestjs/common';

import { Cat } from './model/cat';
import { CatArgs } from './dto/cat.args';
import { CatService } from './cat.service';
import { CreateCatInput } from './dto/create-cat.input';

import { Human } from '@api/human/model/human';

import { Dataloader } from '@shared/modules/dataloader/dataloader.decorator';
import { IDataloader } from '@shared/modules/dataloader/model/dataloader.interface';
import { RolesGuard } from '@shared/auth/guards/roles.guard';
import { Roles } from '@shared/auth/decorators/roles.decorator';

@Resolver(of => Cat)
export class CatResolver {
  constructor(private readonly catService: CatService) {}

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

  @UseGuards(RolesGuard)
  @Roles('admin')
  @Mutation(of => Cat)
  public createCat(@Args('data') data: CreateCatInput): Promise<Cat> {
    return this.catService.create(data);
  }

  @Mutation(of => Boolean)
  public deleteCat(@Args('id') id: number) {
    return this.catService.remove(id);
  }

  @ResolveProperty(() => Human)
  async human(@Parent() cat: Cat, @Dataloader() { catHumanDataloader }: IDataloader): Promise<Human> {
    const owners = await catHumanDataloader.load(cat.humanId || -1);
    return owners.shift();
  }
}
