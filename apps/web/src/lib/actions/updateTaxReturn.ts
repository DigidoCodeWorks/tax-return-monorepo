'use server';

import { graphqlClient } from '../graphql/client';
import { UPDATE_TAX_RETURN } from '../graphql/mutations';
import {
  UpdateTaxReturnMutation,
  UpdateTaxReturnMutationVariables,
} from '../graphql/generated/graphql';

export async function updateTaxReturn(
  input: UpdateTaxReturnMutationVariables['input'],
) {
  try {
    if (!input?.id) {
      console.warn('Missing tax return ID in input.');
      return null;
    }

    const variables: UpdateTaxReturnMutationVariables = { input };
    const { updateTaxReturn } = await graphqlClient.request<
      UpdateTaxReturnMutation,
      UpdateTaxReturnMutationVariables
    >(UPDATE_TAX_RETURN, variables);

    return updateTaxReturn ?? null;
  } catch (error) {
    console.error('Error updating tax return:', error);
    return null;
  }
}
