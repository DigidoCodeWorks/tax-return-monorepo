import { InputType, Field } from "@nestjs/graphql";
import { IsOptional, IsString, IsNumber, IsUUID } from "class-validator";

@InputType()
export class PensionPaymentInput {
  @Field({ nullable: true })
  @IsOptional()
  @IsUUID('4')
  id?: string;

  @Field()
  @IsString()
  type: string;

  @Field()
  @IsString()
  name: string;

  @Field()
  @IsNumber()
  amount: number;
}
