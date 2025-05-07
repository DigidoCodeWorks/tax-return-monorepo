import { graphqlClient } from '../graphql/client';
import { GET_USER_BY_PHONE } from '../graphql/queries';
import {
  GetUserByPhoneQuery,
  GetUserByPhoneQueryVariables,
} from '../graphql/generated/graphql';

export async function fetchUserByPhone(phone: string) {
  const variables: GetUserByPhoneQueryVariables = { phone };

  try {
    const { getUserByPhone } = await graphqlClient.request<
      GetUserByPhoneQuery,
      GetUserByPhoneQueryVariables
    >(GET_USER_BY_PHONE, variables);

    return getUserByPhone;
  } catch (error) {
    console.error('Error fetching user by phone:', error);
    throw error;
  }
}
