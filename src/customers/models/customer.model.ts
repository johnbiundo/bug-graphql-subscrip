import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Customer {
  // @Field(() => ID)
  id: string;

  firstName: string;
  lastName: string;
  email: string;
}
