import { gql } from 'graphql-request';

export const GET_TAX_REPORT = gql`
  query GetTaxReport($nationalId: String!) {
    taxReport(nationalId: $nationalId) {
      income
      assets
      debts
    }
  }
`;
