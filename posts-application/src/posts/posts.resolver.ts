import {
  Args,
  ID,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Post } from './models/post.model';
import { User } from './models/user.model';
import { PostsService } from './posts.service';

@Resolver((of) => Post)
export class PostsResolver {
  constructor(private readonly postsService: PostsService) {}

  @Query((returns) => Post)
  post(@Args({ name: 'id', type: () => ID }) id: string): Post {
    return this.postsService.findOne(parseInt(id));
  }

  @Query((returns) => [Post])
  posts(): Post[] {
    return this.postsService.findAll();
  }

  @ResolveField((of) => User)
  user(@Parent() post: Post): any {
    console.log('post', post);
    return { __typename: 'User', id: post.authorId };
  }
}
