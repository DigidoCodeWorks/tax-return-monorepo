'use server';

import { graphqlClient } from '../graphql/client';
import { GET_TAX_RETURN_ASSETS } from '../graphql/queries';
import {
  GetTaxReturnAssetsQuery,
  GetTaxReturnAssetsQueryVariables,
} from '../graphql/generated/graphql';

export async function fetchTaxReturnAssets(id: string | undefined) {
  try {
    if (!id) {
      console.warn('ID is undefined. Returning null.');
      return null;
    }

    const variables: GetTaxReturnAssetsQueryVariables = { id };
    const { getTaxReturn } = await graphqlClient.request<
      GetTaxReturnAssetsQuery,
      GetTaxReturnAssetsQueryVariables
    >(GET_TAX_RETURN_ASSETS, variables);

    return getTaxReturn?.assets ?? null;
  } catch (error) {
    console.error('Error fetching tax return assets:', error);
    return null;
  }
}
