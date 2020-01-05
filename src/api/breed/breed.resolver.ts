import { Resolver } from '@nestjs/graphql';

import { Breed } from './model/breed';

@Resolver(of => Breed)
export class BreedResolver {}
