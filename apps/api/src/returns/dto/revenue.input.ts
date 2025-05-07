import { InputType, Field } from "@nestjs/graphql";
import { PensionPaymentInput } from "./pension-payment.input";
import { VehicleAllowanceInput } from "./vehicle-allowance.input";
import { WageIncomeInput } from "./wage-income.input";
import { IsOptional, IsUUID } from "class-validator";

@InputType()
export class RevenueInput {
  @Field({ nullable: true })
  @IsOptional()
  @IsUUID("4")
  taxReturnId?: string;

  @Field(() => [WageIncomeInput])
  wageIncomes: WageIncomeInput[];

  @Field(() => [VehicleAllowanceInput])
  vehicleAllowances: VehicleAllowanceInput[];

  @Field(() => [PensionPaymentInput])
  pensionPayments: PensionPaymentInput[];
}