import { gql } from 'graphql-request';

export const GET_TAX_RETURNS = gql`
  query GetTaxReturns($userId: String!) {
    getTaxReturns(userId: $userId) {
      id
      year
      userId
    }
  }
`;

export const GET_TAX_RETURN = gql`
  query GetTaxReturn($id: String!) {
    getTaxReturn(id: $id) {
      id
      year
      userId
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

export const GET_USER_BY_PHONE = gql`
  query GetUserByPhone($phone: String!) {
    getUserByPhone(phone: $phone) {
      id
      name
      ssn
      email
      phone
      address
    }
  }
`;

export const GET_TAX_RETURN_INCOME = gql`
  query GetTaxReturnIncome($id: String!) {
    getTaxReturn(id: $id) {
      id
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
    }
  }
`;

export const GET_TAX_RETURN_ASSETS = gql`
  query GetTaxReturnAssets($id: String!) {
    getTaxReturn(id: $id) {
      id
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
    }
  }
`;

export const GET_TAX_RETURN_DEBT_AND_EXPENSES = gql`
  query GetTaxReturnDebtAndExpenses($id: String!) {
    getTaxReturn(id: $id) {
      id
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
