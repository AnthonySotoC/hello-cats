import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { NotFoundException } from '@nestjs/common';
import * as Dataloader from 'dataloader';

import { Human } from './model/human';
import { HumanArgs } from './dto/human.args';
import { HumanService } from '../human/human.service';
import { CreateHumanInput } from './dto/create-human.input';

@Resolver(of => Human)
export class HumanResolver {
  private readonly humanDataloader: Dataloader<number, Human[]>;

  constructor(private readonly humanService: HumanService) {}
  @Query(of => [Human])
  public humans(@Args() humanArgs: HumanArgs): Promise<Human[]> {
    return this.humanService.findAll(humanArgs);
  }

  @Query(of => Human)
  public human(@Args('id') id: number): Promise<Human> {
    const cat = this.humanService.findOneById(id);
    if (!cat) {
      throw new NotFoundException(id);
    }
    return cat;
  }

  @Mutation(of => Human)
  public createHuman(@Args('data') data: CreateHumanInput): Promise<Human> {
    return this.humanService.findOneById(1);
  }
}
