import { InputType, Field } from "@nestjs/graphql";
import { IsOptional, IsString, IsNumber, IsUUID } from "class-validator";

@InputType()
export class OtherDebtInput {
  @Field({ nullable: true })
  @IsOptional()
  @IsUUID("4")
  id?: string;

  @Field()
  @IsString()
  title: string;

  @Field()
  @IsNumber()
  interestExpenses: number;

  @Field()
  @IsNumber()
  outstandingDebt: number;
}
