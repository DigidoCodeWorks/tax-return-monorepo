'use server';

import { graphqlClient } from '../graphql/client';
import { GET_TAX_RETURN_DEBT_AND_EXPENSES } from '../graphql/queries';
import {
  GetTaxReturnDebtAndExpensesQuery,
  GetTaxReturnDebtAndExpensesQueryVariables,
} from '../graphql/generated/graphql';

export async function fetchTaxReturnDebt(id: string | undefined) {
  try {
    if (!id) {
      console.warn('ID is undefined. Returning null.');
      return null;
    }

    const variables: GetTaxReturnDebtAndExpensesQueryVariables = { id };
    const { getTaxReturn } = await graphqlClient.request<
      GetTaxReturnDebtAndExpensesQuery,
      GetTaxReturnDebtAndExpensesQueryVariables
    >(GET_TAX_RETURN_DEBT_AND_EXPENSES, variables);

    return getTaxReturn?.debtAndExpenses ?? null;
  } catch (error) {
    console.error('Error fetching tax return debt/expenses:', error);
    return null;
  }
}
