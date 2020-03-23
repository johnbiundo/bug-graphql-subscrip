import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Customer } from './models/customer.model';

@Injectable()
export class CustomersService {
  private customers = [];
  constructor() {
    this.create({
      firstName: 'John',
      lastName: 'Smith',
      email: 'johnsmith@nestshop.com',
    });
  }

  findAll() {
    return this.customers;
  }

  create(newCustomer): Promise<Customer> {
    const customer = { ...newCustomer, id: uuid() };
    this.customers.push(customer);
    return customer;
  }
}
