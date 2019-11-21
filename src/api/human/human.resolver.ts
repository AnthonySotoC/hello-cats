import { Resolver } from '@nestjs/graphql';
import { Human } from './model/human';

@Resolver(of => Human)
export class HumanResolver {}
