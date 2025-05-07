import { InputType, Field } from "@nestjs/graphql";
import { Type } from "class-transformer";
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { IsUUID, IsInt, Min, Max } from "class-validator";
import { AssetsInput } from "./assets.input";
import { DebtAndExpensesInput } from "./debt-and-expenses.input";
import { RevenueInput } from "./revenue.input";

@InputType()
export class TaxReturnUpdateInput {
  @Field({ nullable: false })
  @IsString()
  @IsUUID(4)
  id: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsInt()
  @Min(0)
  @Max(10)
  lastStep?: number;

  @Field(() => RevenueInput, { nullable: true })
  @IsOptional()
  @ValidateNested()
  @Type(() => RevenueInput)
  revenue?: RevenueInput;

  @Field(() => AssetsInput, { nullable: true })
  @IsOptional()
  @ValidateNested()
  @Type(() => AssetsInput)
  assets?: AssetsInput;

  @Field(() => DebtAndExpensesInput, { nullable: true })
  @IsOptional()
  @ValidateNested()
  @Type(() => DebtAndExpensesInput)
  debtAndExpenses?: DebtAndExpensesInput;
}
