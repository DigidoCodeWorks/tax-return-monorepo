import { InputType, Field } from "@nestjs/graphql";
import { IsOptional, IsString, IsNumber } from "class-validator";

@InputType()
export class WageIncomeInput {
  @Field({ nullable: true })
  @IsOptional()
  id?: string;

  @Field()
  @IsString()
  ssn: string;

  @Field()
  @IsString()
  name: string;

  @Field()
  @IsNumber()
  salaryAmount: number;
}