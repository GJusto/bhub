import { gql } from "apollo-server";

const CustomerSchema = gql`
  type BankDetails {
    agency: String
    accountNumber: String
    bank: String
  }

  type CustomerData {
    id: String
    corporateName: String!
    phone: String!
    adress: String!
    signupDate: String!
    declaredBilling: Float!
    bankDetails: [BankDetails]!
  }

  input CreateCustomerInput {
    corporateName: String!
    phone: String!
    adress: String!
    declaredBilling: Float!
    bankDetails: [BankDetailsInput!]!
  }

  input UpdateCustomerInput {
    corporateName: String
    phone: String
    adress: String
    declaredBilling: Float
  }

  input BankDetailsInput {
    agency: String
    accountNumber: String
    bank: String
  }

  input IdInput {
    id: String
  }

  type Query {
    getAllCustomers: [CustomerData]
    getCustomerById(input: IdInput): CustomerData
  }

  type Mutation {
    createCustomer(input: CreateCustomerInput!): CustomerData
    updateCustomer(input: UpdateCustomerInput!): CustomerData
    deleteCustomer(input: IdInput!): String
    # updateCustomerBankDetails(input: BankDetailsInput): String
  }
`;

export default CustomerSchema;
