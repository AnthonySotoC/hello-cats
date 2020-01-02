import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { GqlExecutionContext, GraphQLExecutionContext } from '@nestjs/graphql';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const graphqlExecutionContext: GraphQLExecutionContext = GqlExecutionContext.create(context);
    const ctx: any = graphqlExecutionContext.getContext();

    // TODO Validate the request token
    ctx.user = { username: 'Anthony', roles: ['admin'] };
    return true;
  }
}
