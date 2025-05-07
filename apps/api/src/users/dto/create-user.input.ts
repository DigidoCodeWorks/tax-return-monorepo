import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field()
  name: string;

  @Field()
  ssn: string;

  @Field()
  email: string;

  @Field()
  phone: string;

  @Field()
  address: string;
}
