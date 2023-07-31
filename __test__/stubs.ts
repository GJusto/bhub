import { AxiosError, AxiosResponse } from "axios";
import CustomerModel from "@domain/model/customer-model";
import CustomerDTO from "@domain/DTO/customer-DTO";

const requestOptions = {
  valid: {
    id: "6123abd0-6d46-4d07-853a-484a083f4d09",
  },
  invalid: {
    id: 1234,
  },
  null: {
    id: null,
  },
};

const inputCustomerByIdStub = {
  id: "15e0ef4e-74af-416f-828c-c4f7d8c46ea5",
};

const inputStub = {
  createCustomer: {
    valid: {
      corporateName: "nike",
      phone: "1234-7896",
      adress: "rua sports",
      declaredBilling: 645548.21,
      bankDetails: [
        {
          agency: "987",
          accountNumber: "00000-0",
          bank: "120",
        },
        {
          agency: "120",
          accountNumber: "23000-0",
          bank: "200",
        },
        {
          agency: "999",
          accountNumber: "111111",
          bank: "3333",
        },
      ],
    },
    invalid: {
      corporateName: "nike",
      phone: 12347896,
      adress: "rua sports",
      declaredBilling: 645548.21,
      bankDetails: [
        {
          agency: 987,
          accountNumber: "00000-0",
          bank: "120",
        },
      ],
    },
    empty: {},
    null: {
      corporateName: null,
      phone: null,
      adress: null,
      declaredBilling: null,
      bankDetails: [
        {
          agency: null,
          accountNumber: null,
          bank: null,
        },
      ],
    },
  },
  updateCustomer: {
    valid: {
      adress: "rua sportwear, 360",
    },
    invalid: {
      adress: 360,
    },
    empty: {},
    null: {
      adress: null,
    },
  },
  deleteCustomer: {
    valid: {
      id: "6123abd0-6d46-4d07-853a-484a083f4d09",
    },
    invalid: {
      id: "tugyhj",
    },
    empty: {},
    null: {
      id: null,
    },
  },
  getCustomerById: {
    valid: {
      id: "15e0ef4e-74af-416f-828c-c4f7d8c46ea5",
    },
    invalid: {
      id: "gfdgd",
    },
    empty: {},
    null: {
      id: null,
    },
  },
};

const queryStub = {
  query: {
    getAllCustomers: `
        query GetAllCustomers {
            getAllCustomers {
              id
              corporateName
              phone
              adress
              signupDate
              declaredBilling
              bankDetails {
                agency
                accountNumber
                bank
              }
            }
          }`,
    getCustomerById: `
    query GetClientById($input: IdInput) {
        getCustomerById(input: $input) {
          id
          corporateName
          phone
          adress
          signupDate
          declaredBilling
          bankDetails {
            agency
            accountNumber
            bank
          }
        }
      }
    `,
  },
  mutation: {
    createCustomer: `
    mutation CreateCustomer($input: CreateCustomerInput!) {
        createCustomer(input: $input) {
          id
          corporateName
          phone
          adress
          signupDate
          declaredBilling
          bankDetails {
            agency
            accountNumber
            bank
          }
        }
      }
    `,
    updateCustomer: `
    mutation UpdateCustomer($input: UpdateCustomerInput!) {
        updateCustomer(input: $input) {
          id
          corporateName
          phone
          adress
          signupDate
          declaredBilling
          bankDetails {
            agency
            accountNumber
            bank
          }
        }
      }
    `,
    deleteCustomer: `
    mutation DeleteCustomer($input: IdInput!) {
        deleteCustomer(input: $input) 
      }
    `,
  },
};

const getAllCustomersResponse: CustomerDTO[] = [
  {
    id: "ca0bb389-f716-4db5-a08c-178d45fd2650",
    corporateName: "natura",
    phone: "1234-7896",
    adress: "rua perfumes",
    signupDate:
      "Thu Jul 27 2023 03:03:03 GMT-0300 (Horário Padrão de Brasília)",
    declaredBilling: 645548.21,
    bankDetails: [
      {
        agency: "987",
        accountNumber: "00000-0",
        bank: "120",
      },
    ],
  },
  {
    id: "66ff782f-d74f-43a1-a52f-90009475eea1",
    corporateName: "nestle",
    phone: "1234-7896",
    adress: "rua chocolates",
    signupDate:
      "Thu Jul 27 2023 03:03:29 GMT-0300 (Horário Padrão de Brasília)",
    declaredBilling: 645548.21,
    bankDetails: [
      {
        agency: "987",
        accountNumber: "00000-0",
        bank: "120",
      },
      {
        agency: "120",
        accountNumber: "23000-0",
        bank: "200",
      },
    ],
  },
];

const getCustomerByIdResponse: CustomerDTO = {
  id: "15e0ef4e-74af-416f-828c-c4f7d8c46ea5",
  corporateName: "nike",
  phone: "1234-7896",
  adress: "rua sports",
  signupDate: "Thu Jul 27 2023 03:19:19 GMT-0300 (Horário Padrão de Brasília)",
  declaredBilling: 645548.21,
  bankDetails: [
    {
      agency: "987",
      accountNumber: "00000-0",
      bank: "120",
    },
    {
      agency: "120",
      accountNumber: "23000-0",
      bank: "200",
    },
    {
      agency: "999",
      accountNumber: "111111",
      bank: "3333",
    },
  ],
};

const axiosResponseErrorStub: { [key: string]: AxiosError } = {
  getCustomerByIdInputError: {
    config: undefined,
    message: "Request failed with status code 400",
    name: "Error",
    response: {
      status: 400,
      statusText: "Bad Request",
      data: {
        getCustomerById: null,
      },
      headers: undefined,
      config: undefined,
    },
    isAxiosError: true,
    toJSON: () => {
      return undefined;
    },
  },
};

const createCustomerResponse: AxiosResponse = {
  data: {
    createCustomer: {
      id: "15e0ef4e-74af-416f-828c-c4f7d8c46ea5",
      corporateName: "nike",
      phone: "1234-7896",
      adress: "rua sports",
      signupDate:
        "Thu Jul 27 2023 03:19:19 GMT-0300 (Horário Padrão de Brasília)",
      declaredBilling: 645548.21,
      bankDetails: [
        {
          agency: "987",
          accountNumber: "00000-0",
          bank: "120",
        },
        {
          agency: "120",
          accountNumber: "23000-0",
          bank: "200",
        },
        {
          agency: "999",
          accountNumber: "111111",
          bank: "3333",
        },
      ],
    },
  },
  status: undefined,
  statusText: undefined,
  headers: undefined,
  config: undefined,
};

const updateCustomerResponse: AxiosResponse = {
  data: {
    updateCustomer: {
      id: "6123abd0-6d46-4d07-853a-484a083f4d09",
      corporateName: "nike",
      phone: "1234-7896",
      adress: "rua sportwear, 360",
      signupDate:
        "Thu Jul 27 2023 03:33:23 GMT-0300 (Horário Padrão de Brasília)",
      declaredBilling: 645548.21,
      bankDetails: [
        {
          agency: "987",
          accountNumber: "00000-0",
          bank: "120",
        },
        {
          agency: "120",
          accountNumber: "23000-0",
          bank: "200",
        },
        {
          agency: "999",
          accountNumber: "111111",
          bank: "3333",
        },
      ],
    },
  },
  status: undefined,
  statusText: undefined,
  headers: undefined,
  config: undefined,
};

const successDeleteCustomerResponse: AxiosResponse = {
  data: {
    deleteCustomer: "Successfully removed!",
  },
  status: undefined,
  statusText: undefined,
  headers: undefined,
  config: undefined,
};

const negativeDeleteCustomerResponse: AxiosResponse = {
  data: {
    deleteCustomer:
      "Impossible to delete this customer. Try again with another id!",
  },
  status: undefined,
  statusText: undefined,
  headers: undefined,
  config: undefined,
};

export {
  requestOptions,
  inputCustomerByIdStub,
  inputStub,
  queryStub,
  getAllCustomersResponse,
  getCustomerByIdResponse,
  createCustomerResponse,
  updateCustomerResponse,
  successDeleteCustomerResponse,
  negativeDeleteCustomerResponse,
  axiosResponseErrorStub,
};
