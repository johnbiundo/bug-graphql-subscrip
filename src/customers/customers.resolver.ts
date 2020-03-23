import {
  Resolver,
  Subscription,
  Args,
  Mutation,
  ID,
  Query,
} from '@nestjs/graphql';

import { PubSub } from 'apollo-server-express';

import { Customer } from './models/customer.model';
import { CustomersService } from './customers.service';

import { NewCustomer } from './dto/new-customer.input';

const pubSub = new PubSub();

@Resolver(of => Customer)
export class CustomersResolver {
  constructor(private customersService: CustomersService) {}

  @Query(() => [Customer])
  customers() {
    return this.customersService.findAll();
  }

  @Mutation(returns => Customer)
  async addCustomer(@Args('newCustomer') newCustomer: NewCustomer) {
    const addedCustomer = await this.customersService.create(newCustomer);
    console.log(`added: ${JSON.stringify(addedCustomer)}`);
    pubSub.publish('customerAdded', { customerAdded: addedCustomer });
    return addedCustomer;
  }

  @Subscription(returns => Customer, { nullable: true })
  custAdded() {
    return pubSub.asyncIterator('customerAdded');
  }
}
