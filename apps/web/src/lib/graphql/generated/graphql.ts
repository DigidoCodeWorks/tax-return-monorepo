/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type Assets = {
  __typename?: 'Assets';
  automobiles: Array<Automobile>;
  domesticRealEstate: Array<DomesticRealEstate>;
};

export type AssetsInput = {
  automobiles: Array<AutomobileInput>;
  domesticRealEstate: Array<DomesticRealEstateInput>;
};

export type Automobile = {
  __typename?: 'Automobile';
  id: Scalars['String']['output'];
  plateNumber: Scalars['String']['output'];
  purchasePrice: Scalars['Float']['output'];
  yearOfPurchase: Scalars['Float']['output'];
};

export type AutomobileInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  plateNumber: Scalars['String']['input'];
  purchasePrice: Scalars['Float']['input'];
  yearOfPurchase: Scalars['Float']['input'];
};

export type CreateUserInput = {
  address: Scalars['String']['input'];
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  ssn: Scalars['String']['input'];
};

export type DebtAndExpenses = {
  __typename?: 'DebtAndExpenses';
  id: Scalars['String']['output'];
  otherDebts: Array<OtherDebt>;
  residentialInterestExpenses: Array<ResidentialPropertyInterestExpense>;
};

export type DebtAndExpensesInput = {
  otherDebts?: InputMaybe<Array<OtherDebtInput>>;
  residentialInterestExpenses?: InputMaybe<Array<ResidentialPropertyInterestExpenseInput>>;
};

export type DomesticRealEstate = {
  __typename?: 'DomesticRealEstate';
  address: Scalars['String']['output'];
  id: Scalars['String']['output'];
  landlineNumber: Scalars['String']['output'];
  realEstateValuation: Scalars['Float']['output'];
};

export type DomesticRealEstateInput = {
  address: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  landlineNumber: Scalars['String']['input'];
  realEstateValuation: Scalars['Float']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createTaxReturn: TaxReturn;
  createUser: User;
  removeUser: User;
  updateTaxReturn: TaxReturn;
  updateUser: User;
};


export type MutationCreateTaxReturnArgs = {
  input: TaxReturnInput;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationRemoveUserArgs = {
  id: Scalars['String']['input'];
};


export type MutationUpdateTaxReturnArgs = {
  input: TaxReturnUpdateInput;
};


export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};

export type OtherDebt = {
  __typename?: 'OtherDebt';
  id: Scalars['String']['output'];
  interestExpenses: Scalars['Float']['output'];
  outstandingDebt: Scalars['Float']['output'];
  title: Scalars['String']['output'];
};

export type OtherDebtInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  interestExpenses: Scalars['Float']['input'];
  outstandingDebt: Scalars['Float']['input'];
  title: Scalars['String']['input'];
};

export type PensionPayment = {
  __typename?: 'PensionPayment';
  amount: Scalars['Float']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type PensionPaymentInput = {
  amount: Scalars['Float']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  type: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  getData: Scalars['String']['output'];
  getTaxReturn: TaxReturn;
  getTaxReturns: Array<TaxReturn>;
  getUserByPhone: User;
  user: User;
  users: Array<User>;
};


export type QueryGetTaxReturnArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetTaxReturnsArgs = {
  userId: Scalars['String']['input'];
};


export type QueryGetUserByPhoneArgs = {
  phone: Scalars['String']['input'];
};


export type QueryUserArgs = {
  id: Scalars['String']['input'];
};

export type ResidentialPropertyInterestExpense = {
  __typename?: 'ResidentialPropertyInterestExpense';
  borrowingDate: Scalars['DateTime']['output'];
  faceValue: Scalars['Float']['output'];
  id: Scalars['String']['output'];
  interestExpenses: Scalars['Float']['output'];
  lender: Scalars['String']['output'];
  lendersIdNumber: Scalars['String']['output'];
  loanNumber: Scalars['String']['output'];
  loanTermYears: Scalars['Float']['output'];
  location: Scalars['String']['output'];
  outstandingDebt: Scalars['Float']['output'];
  totalAnnualPayments: Scalars['Float']['output'];
  yearOfPurchase: Scalars['Float']['output'];
};

export type ResidentialPropertyInterestExpenseInput = {
  borrowingDate: Scalars['DateTime']['input'];
  faceValue: Scalars['Float']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  interestExpenses: Scalars['Float']['input'];
  lender: Scalars['String']['input'];
  lendersIdNumber: Scalars['String']['input'];
  loanNumber: Scalars['String']['input'];
  loanTermYears: Scalars['Float']['input'];
  location: Scalars['String']['input'];
  outstandingDebt: Scalars['Float']['input'];
  totalAnnualPayments: Scalars['Float']['input'];
  yearOfPurchase: Scalars['Float']['input'];
};

export type Revenue = {
  __typename?: 'Revenue';
  id: Scalars['String']['output'];
  pensionPayments: Array<PensionPayment>;
  vehicleAllowances: Array<VehicleAllowance>;
  wageIncomes: Array<WageIncome>;
};

export type RevenueInput = {
  pensionPayments: Array<PensionPaymentInput>;
  taxReturnId?: InputMaybe<Scalars['String']['input']>;
  vehicleAllowances: Array<VehicleAllowanceInput>;
  wageIncomes: Array<WageIncomeInput>;
};

export type TaxReturn = {
  __typename?: 'TaxReturn';
  assets?: Maybe<Assets>;
  debtAndExpenses?: Maybe<DebtAndExpenses>;
  id: Scalars['String']['output'];
  lastStep?: Maybe<Scalars['Float']['output']>;
  revenue?: Maybe<Revenue>;
  userId: Scalars['String']['output'];
  year: Scalars['Float']['output'];
};

export type TaxReturnInput = {
  assets?: InputMaybe<AssetsInput>;
  debtAndExpenses?: InputMaybe<DebtAndExpensesInput>;
  lastStep?: InputMaybe<Scalars['Float']['input']>;
  revenue?: InputMaybe<RevenueInput>;
  userId: Scalars['String']['input'];
  year: Scalars['Float']['input'];
};

export type TaxReturnUpdateInput = {
  assets?: InputMaybe<AssetsInput>;
  debtAndExpenses?: InputMaybe<DebtAndExpensesInput>;
  id: Scalars['String']['input'];
  lastStep?: InputMaybe<Scalars['Float']['input']>;
  revenue?: InputMaybe<RevenueInput>;
};

export type UpdateUserInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  ssn?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  address: Scalars['String']['output'];
  email: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  ssn: Scalars['String']['output'];
};

export type VehicleAllowance = {
  __typename?: 'VehicleAllowance';
  amount: Scalars['Float']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type VehicleAllowanceInput = {
  amount: Scalars['Float']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  type: Scalars['String']['input'];
};

export type WageIncome = {
  __typename?: 'WageIncome';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  salaryAmount: Scalars['Float']['output'];
  ssn: Scalars['String']['output'];
};

export type WageIncomeInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  salaryAmount: Scalars['Float']['input'];
  ssn: Scalars['String']['input'];
};

export type UpdateTaxReturnMutationVariables = Exact<{
  input: TaxReturnUpdateInput;
}>;


export type UpdateTaxReturnMutation = { __typename?: 'Mutation', updateTaxReturn: { __typename?: 'TaxReturn', id: string, lastStep?: number | null, revenue?: { __typename?: 'Revenue', wageIncomes: Array<{ __typename?: 'WageIncome', id: string, ssn: string, name: string, salaryAmount: number }>, pensionPayments: Array<{ __typename?: 'PensionPayment', id: string, type: string, name: string, amount: number }>, vehicleAllowances: Array<{ __typename?: 'VehicleAllowance', id: string, type: string, name: string, amount: number }> } | null, assets?: { __typename?: 'Assets', domesticRealEstate: Array<{ __typename?: 'DomesticRealEstate', id: string, landlineNumber: string, address: string, realEstateValuation: number }>, automobiles: Array<{ __typename?: 'Automobile', id: string, plateNumber: string, yearOfPurchase: number, purchasePrice: number }> } | null, debtAndExpenses?: { __typename?: 'DebtAndExpenses', residentialInterestExpenses: Array<{ __typename?: 'ResidentialPropertyInterestExpense', id: string, yearOfPurchase: number, location: string, lender: string, lendersIdNumber: string, loanNumber: string, borrowingDate: any, loanTermYears: number, totalAnnualPayments: number, faceValue: number, interestExpenses: number, outstandingDebt: number }>, otherDebts: Array<{ __typename?: 'OtherDebt', id: string, title: string, interestExpenses: number, outstandingDebt: number }> } | null } };

export type GetTaxReturnsQueryVariables = Exact<{
  userId: Scalars['String']['input'];
}>;


export type GetTaxReturnsQuery = { __typename?: 'Query', getTaxReturns: Array<{ __typename?: 'TaxReturn', id: string, year: number, userId: string }> };

export type GetTaxReturnQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetTaxReturnQuery = { __typename?: 'Query', getTaxReturn: { __typename?: 'TaxReturn', id: string, year: number, userId: string, revenue?: { __typename?: 'Revenue', wageIncomes: Array<{ __typename?: 'WageIncome', id: string, ssn: string, name: string, salaryAmount: number }>, pensionPayments: Array<{ __typename?: 'PensionPayment', id: string, type: string, name: string, amount: number }>, vehicleAllowances: Array<{ __typename?: 'VehicleAllowance', id: string, type: string, name: string, amount: number }> } | null, assets?: { __typename?: 'Assets', domesticRealEstate: Array<{ __typename?: 'DomesticRealEstate', id: string, landlineNumber: string, address: string, realEstateValuation: number }>, automobiles: Array<{ __typename?: 'Automobile', id: string, plateNumber: string, yearOfPurchase: number, purchasePrice: number }> } | null, debtAndExpenses?: { __typename?: 'DebtAndExpenses', residentialInterestExpenses: Array<{ __typename?: 'ResidentialPropertyInterestExpense', id: string, yearOfPurchase: number, location: string, lender: string, lendersIdNumber: string, loanNumber: string, borrowingDate: any, loanTermYears: number, totalAnnualPayments: number, faceValue: number, interestExpenses: number, outstandingDebt: number }>, otherDebts: Array<{ __typename?: 'OtherDebt', id: string, title: string, interestExpenses: number, outstandingDebt: number }> } | null } };

export type GetUserByPhoneQueryVariables = Exact<{
  phone: Scalars['String']['input'];
}>;


export type GetUserByPhoneQuery = { __typename?: 'Query', getUserByPhone: { __typename?: 'User', id: string, name: string, ssn: string, email: string, phone: string, address: string } };

export type GetTaxReturnIncomeQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetTaxReturnIncomeQuery = { __typename?: 'Query', getTaxReturn: { __typename?: 'TaxReturn', id: string, revenue?: { __typename?: 'Revenue', wageIncomes: Array<{ __typename?: 'WageIncome', id: string, ssn: string, name: string, salaryAmount: number }>, pensionPayments: Array<{ __typename?: 'PensionPayment', id: string, type: string, name: string, amount: number }>, vehicleAllowances: Array<{ __typename?: 'VehicleAllowance', id: string, type: string, name: string, amount: number }> } | null } };

export type GetTaxReturnAssetsQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetTaxReturnAssetsQuery = { __typename?: 'Query', getTaxReturn: { __typename?: 'TaxReturn', id: string, assets?: { __typename?: 'Assets', domesticRealEstate: Array<{ __typename?: 'DomesticRealEstate', id: string, landlineNumber: string, address: string, realEstateValuation: number }>, automobiles: Array<{ __typename?: 'Automobile', id: string, plateNumber: string, yearOfPurchase: number, purchasePrice: number }> } | null } };

export type GetTaxReturnDebtAndExpensesQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetTaxReturnDebtAndExpensesQuery = { __typename?: 'Query', getTaxReturn: { __typename?: 'TaxReturn', id: string, debtAndExpenses?: { __typename?: 'DebtAndExpenses', residentialInterestExpenses: Array<{ __typename?: 'ResidentialPropertyInterestExpense', id: string, yearOfPurchase: number, location: string, lender: string, lendersIdNumber: string, loanNumber: string, borrowingDate: any, loanTermYears: number, totalAnnualPayments: number, faceValue: number, interestExpenses: number, outstandingDebt: number }>, otherDebts: Array<{ __typename?: 'OtherDebt', id: string, title: string, interestExpenses: number, outstandingDebt: number }> } | null } };


export const UpdateTaxReturnDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateTaxReturn"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TaxReturnUpdateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateTaxReturn"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"lastStep"}},{"kind":"Field","name":{"kind":"Name","value":"revenue"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"wageIncomes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"ssn"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"salaryAmount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pensionPayments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"vehicleAllowances"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"assets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"domesticRealEstate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"landlineNumber"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"realEstateValuation"}}]}},{"kind":"Field","name":{"kind":"Name","value":"automobiles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"plateNumber"}},{"kind":"Field","name":{"kind":"Name","value":"yearOfPurchase"}},{"kind":"Field","name":{"kind":"Name","value":"purchasePrice"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"debtAndExpenses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"residentialInterestExpenses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"yearOfPurchase"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"lender"}},{"kind":"Field","name":{"kind":"Name","value":"lendersIdNumber"}},{"kind":"Field","name":{"kind":"Name","value":"loanNumber"}},{"kind":"Field","name":{"kind":"Name","value":"borrowingDate"}},{"kind":"Field","name":{"kind":"Name","value":"loanTermYears"}},{"kind":"Field","name":{"kind":"Name","value":"totalAnnualPayments"}},{"kind":"Field","name":{"kind":"Name","value":"faceValue"}},{"kind":"Field","name":{"kind":"Name","value":"interestExpenses"}},{"kind":"Field","name":{"kind":"Name","value":"outstandingDebt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"otherDebts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"interestExpenses"}},{"kind":"Field","name":{"kind":"Name","value":"outstandingDebt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<UpdateTaxReturnMutation, UpdateTaxReturnMutationVariables>;
export const GetTaxReturnsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTaxReturns"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTaxReturns"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}}]}}]} as unknown as DocumentNode<GetTaxReturnsQuery, GetTaxReturnsQueryVariables>;
export const GetTaxReturnDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTaxReturn"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTaxReturn"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"revenue"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"wageIncomes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"ssn"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"salaryAmount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pensionPayments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"vehicleAllowances"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"assets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"domesticRealEstate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"landlineNumber"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"realEstateValuation"}}]}},{"kind":"Field","name":{"kind":"Name","value":"automobiles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"plateNumber"}},{"kind":"Field","name":{"kind":"Name","value":"yearOfPurchase"}},{"kind":"Field","name":{"kind":"Name","value":"purchasePrice"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"debtAndExpenses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"residentialInterestExpenses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"yearOfPurchase"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"lender"}},{"kind":"Field","name":{"kind":"Name","value":"lendersIdNumber"}},{"kind":"Field","name":{"kind":"Name","value":"loanNumber"}},{"kind":"Field","name":{"kind":"Name","value":"borrowingDate"}},{"kind":"Field","name":{"kind":"Name","value":"loanTermYears"}},{"kind":"Field","name":{"kind":"Name","value":"totalAnnualPayments"}},{"kind":"Field","name":{"kind":"Name","value":"faceValue"}},{"kind":"Field","name":{"kind":"Name","value":"interestExpenses"}},{"kind":"Field","name":{"kind":"Name","value":"outstandingDebt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"otherDebts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"interestExpenses"}},{"kind":"Field","name":{"kind":"Name","value":"outstandingDebt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetTaxReturnQuery, GetTaxReturnQueryVariables>;
export const GetUserByPhoneDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserByPhone"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"phone"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getUserByPhone"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"phone"},"value":{"kind":"Variable","name":{"kind":"Name","value":"phone"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"ssn"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}}]} as unknown as DocumentNode<GetUserByPhoneQuery, GetUserByPhoneQueryVariables>;
export const GetTaxReturnIncomeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTaxReturnIncome"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTaxReturn"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"revenue"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"wageIncomes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"ssn"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"salaryAmount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pensionPayments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"vehicleAllowances"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetTaxReturnIncomeQuery, GetTaxReturnIncomeQueryVariables>;
export const GetTaxReturnAssetsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTaxReturnAssets"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTaxReturn"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"assets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"domesticRealEstate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"landlineNumber"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"realEstateValuation"}}]}},{"kind":"Field","name":{"kind":"Name","value":"automobiles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"plateNumber"}},{"kind":"Field","name":{"kind":"Name","value":"yearOfPurchase"}},{"kind":"Field","name":{"kind":"Name","value":"purchasePrice"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetTaxReturnAssetsQuery, GetTaxReturnAssetsQueryVariables>;
export const GetTaxReturnDebtAndExpensesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTaxReturnDebtAndExpenses"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTaxReturn"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"debtAndExpenses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"residentialInterestExpenses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"yearOfPurchase"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"lender"}},{"kind":"Field","name":{"kind":"Name","value":"lendersIdNumber"}},{"kind":"Field","name":{"kind":"Name","value":"loanNumber"}},{"kind":"Field","name":{"kind":"Name","value":"borrowingDate"}},{"kind":"Field","name":{"kind":"Name","value":"loanTermYears"}},{"kind":"Field","name":{"kind":"Name","value":"totalAnnualPayments"}},{"kind":"Field","name":{"kind":"Name","value":"faceValue"}},{"kind":"Field","name":{"kind":"Name","value":"interestExpenses"}},{"kind":"Field","name":{"kind":"Name","value":"outstandingDebt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"otherDebts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"interestExpenses"}},{"kind":"Field","name":{"kind":"Name","value":"outstandingDebt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetTaxReturnDebtAndExpensesQuery, GetTaxReturnDebtAndExpensesQueryVariables>;