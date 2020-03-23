import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { CustomersModule } from './customers/customers.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql',
    }),
    CustomersModule,
  ],
})
export class AppModule {}
