import CustomerService from "../service/customer-service";

const customerService = new CustomerService();
const CustomerResolvers = {
  Query: {
    getAllCustomers: async (_, __, ___) => {
      return customerService.getAllCustomers();
    },

    getCustomerById: async (_, { input: { id } }) => {
      return customerService.getCustomerById({ input: { id } });
    },
  },

  Mutation: {
    createCustomer: async (_, args) => {
      return customerService.createCustomer(args);
    },

    updateCustomer: async (_, args, context) => {
      return customerService.updateCustomer(args, context);
    },

    deleteCustomer: async (_, { input: { id } }) => {
      return customerService.deleteCustomer({ input: { id } });
    },
  },
};

export default CustomerResolvers;
