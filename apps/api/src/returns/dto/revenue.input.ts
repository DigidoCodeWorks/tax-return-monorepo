import { InputType, Field } from "@nestjs/graphql";
import { PensionPaymentInput } from "./pension-payment.input";
import { VehicleAllowanceInput } from "./vehicle-allowance.input";
import { WageIncomeInput } from "./wage-income.input";

@InputType()
export class RevenueInput {
  @Field({ nullable: true })
  taxReturnId?: string;

  @Field(() => [WageIncomeInput])
  wageIncomes: WageIncomeInput[];

  @Field(() => [VehicleAllowanceInput])
  vehicleAllowances: VehicleAllowanceInput[];

  @Field(() => [PensionPaymentInput])
  pensionPayments: PensionPaymentInput[];
}