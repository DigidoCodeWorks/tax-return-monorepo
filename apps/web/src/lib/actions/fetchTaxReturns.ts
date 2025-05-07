'use server';

import { graphqlClient } from '../graphql/client';
import { GET_TAX_RETURNS } from '../graphql/queries';
import {
  GetTaxReturnsQuery,
  GetTaxReturnsQueryVariables,
} from '../graphql/generated/graphql';

export async function fetchTaxReturnsByUserId(userId: string | undefined) {
  try {
    if (!userId) {
      console.warn('userId is undefined. Returning null.');
      return null;
    }
    const variables: GetTaxReturnsQueryVariables = { userId };

    const { getTaxReturns } = await graphqlClient.request<
      GetTaxReturnsQuery,
      GetTaxReturnsQueryVariables
    >(GET_TAX_RETURNS, variables);
    console.log(userId, 'userIDDD');
    return getTaxReturns;
  } catch (error) {
    console.error('Error fetching tax returns:', error);
    return null;
  }
}
