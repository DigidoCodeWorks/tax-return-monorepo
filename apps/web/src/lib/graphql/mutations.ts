import { gql } from 'graphql-request';

export const UPDATE_TAX_RETURN = gql`
  mutation UpdateTaxReturn($input: TaxReturnUpdateInput!) {
    updateTaxReturn(input: $input) {
      id
      lastStep
      revenue {
        wageIncomes {
          id
          ssn
          name
          salaryAmount
        }
        pensionPayments {
          id
          type
          name
          amount
        }
        vehicleAllowances {
          id
          type
          name
          amount
        }
      }
      assets {
        domesticRealEstate {
          id
          landlineNumber
          address
          realEstateValuation
        }
        automobiles {
          id
          plateNumber
          yearOfPurchase
          purchasePrice
        }
      }
      debtAndExpenses {
        residentialInterestExpenses {
          id
          yearOfPurchase
          location
          lender
          lendersIdNumber
          loanNumber
          borrowingDate
          loanTermYears
          totalAnnualPayments
          faceValue
          interestExpenses
          outstandingDebt
        }
        otherDebts {
          id
          title
          interestExpenses
          outstandingDebt
        }
      }
    }
  }
`;
