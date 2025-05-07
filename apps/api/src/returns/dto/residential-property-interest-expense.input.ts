import { InputType, Field, GraphQLISODateTime } from "@nestjs/graphql";
import { IsOptional, IsNumber, IsString, IsUUID } from "class-validator";

@InputType()
export class ResidentialPropertyInterestExpenseInput {
  @Field({ nullable: true })
  @IsOptional()
  @IsUUID("4")
  id?: string;

  @Field()
  @IsNumber()
  yearOfPurchase: number;

  @Field()
  @IsString()
  location: string;

  @Field()
  @IsString()
  lender: string;

  @Field()
  @IsString()
  lendersIdNumber: string;

  @Field()
  @IsString()
  loanNumber: string;

  @Field(() => GraphQLISODateTime)
  borrowingDate: Date;

  @Field()
  @IsNumber()
  loanTermYears: number;

  @Field()
  @IsNumber()
  totalAnnualPayments: number;

  @Field()
  @IsNumber()
  faceValue: number;

  @Field()
  @IsNumber()
  interestExpenses: number;

  @Field()
  @IsNumber()
  outstandingDebt: number;
}