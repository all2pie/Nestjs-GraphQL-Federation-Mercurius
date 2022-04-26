import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import {
  MercuriusFederationDriverConfig,
  MercuriusFederationDriver,
} from '@nestjs/mercurius';
import { User } from './models/user.model';
import { PostsResolver } from './posts.resolver';
import { PostsService } from './posts.service';
import { UsersResolver } from './users.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<MercuriusFederationDriverConfig>({
      driver: MercuriusFederationDriver,
      autoSchemaFile: true,
      // autoSchemaFile: 'post.gql',
      graphiql: true,
      buildSchemaOptions: {
        orphanedTypes: [User],
      },
    }),
  ],
  providers: [PostsService, PostsResolver, UsersResolver],
})
export class PostsModule {}
