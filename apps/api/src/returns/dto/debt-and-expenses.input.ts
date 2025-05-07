import { InputType, Field } from "@nestjs/graphql";
import { OtherDebtInput } from "./other-debt.input";
import { ResidentialPropertyInterestExpenseInput } from "./residential-property-interest-expense.input";

@InputType()
export class DebtAndExpensesInput {
  @Field(() => [ResidentialPropertyInterestExpenseInput], { nullable: true })
  residentialInterestExpenses?: ResidentialPropertyInterestExpenseInput[];

  @Field(() => [OtherDebtInput], { nullable: true })
  otherDebts?: OtherDebtInput[];
}