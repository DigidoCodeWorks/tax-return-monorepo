'use server';

import { graphqlClient } from '../graphql/client';
import { GET_TAX_RETURN } from '../graphql/queries';
import {
  GetTaxReturnQuery,
  GetTaxReturnQueryVariables,
} from '../graphql/generated/graphql';

export async function fetchTaxReturnById(id: string | undefined) {
  try {
    if (!id) {
      console.warn('ID is undefined. Returning null.');
      return null;
    }
    const variables: GetTaxReturnQueryVariables = { id };

    const { getTaxReturn } = await graphqlClient.request<
      GetTaxReturnQuery,
      GetTaxReturnQueryVariables
    >(GET_TAX_RETURN, variables);

    return getTaxReturn;
  } catch (error) {
    console.error('Error fetching tax return:', error);
    return null;
  }
}
