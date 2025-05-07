'use server';

import { graphqlClient } from '../graphql/client';
import { GET_TAX_RETURNS } from '../graphql/queries';
import {
  GetTaxReturnsQuery,
  GetTaxReturnsQueryVariables,
} from '../graphql/generated/graphql';

export async function fetchTaxReturnsByUserId(userId: string) {
  try {
    const variables: GetTaxReturnsQueryVariables = { userId };

    const { getTaxReturns } = await graphqlClient.request<
      GetTaxReturnsQuery,
      GetTaxReturnsQueryVariables
    >(GET_TAX_RETURNS, variables);
    console.log(userId, 'userIDDD');
    return getTaxReturns;
  } catch (error) {
    console.error('Error fetching tax returns:', error);
    throw new Error('Unable to fetch tax returns. Please try again later.');
  }
}
