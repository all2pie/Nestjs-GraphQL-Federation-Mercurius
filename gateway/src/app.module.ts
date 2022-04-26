import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import {
  MercuriusGatewayDriver,
  MercuriusGatewayDriverConfig,
} from '@nestjs/mercurius';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    GraphQLModule.forRoot<MercuriusGatewayDriverConfig>({
      driver: MercuriusGatewayDriver,
      graphiql: true,
      gateway: {
        services: [
          { name: 'users', url: 'http://localhost:3000/graphql' },
          { name: 'posts', url: 'http://localhost:3001/graphql' },
        ],
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
