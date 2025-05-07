'use server';

import { graphqlClient } from '../graphql/client';
import { GET_TAX_RETURN_INCOME } from '../graphql/queries';
import {
  GetTaxReturnIncomeQuery,
  GetTaxReturnIncomeQueryVariables,
} from '../graphql/generated/graphql';

export async function fetchTaxReturnIncome(id: string | undefined) {
  try {
    if (!id) {
      console.warn('ID is undefined. Returning null.');
      return null;
    }

    const variables: GetTaxReturnIncomeQueryVariables = { id };
    const { getTaxReturn } = await graphqlClient.request<
      GetTaxReturnIncomeQuery,
      GetTaxReturnIncomeQueryVariables
    >(GET_TAX_RETURN_INCOME, variables);
    console.log(getTaxReturn, 'rtttttttttt');
    return getTaxReturn?.revenue ?? null;
  } catch (error) {
    console.error('Error fetching tax return income:', error);
    return null;
  }
}
