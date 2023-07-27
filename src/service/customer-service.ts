import CustomerExtension from "@domain/extensions/customer-extension";
import { CustomerDbSchema } from "@domain/repository/customer-db-schema";
import { randomUUID } from "crypto";
import { model } from "mongoose";

model("customer", CustomerDbSchema);
const customer = require("../domain/repository/customer-db-schema");

class CustomerService {
  async getAllCustomers() {
    const model = await customer.find();
    CustomerExtension.toArrayModel(model);
    const dto = CustomerExtension.toArrayDTO(model);
    return dto;
    // const result = await customer.find();
    // return result;
  }

  async getCustomerById({ input: { id } }) {
    const model = await customer.findOne({ id });
    CustomerExtension.toModel(model);
    const dto = CustomerExtension.toDTO(model);
    return dto;
  }

  async createCustomer(args: any) {
    const createdCustomer = new customer({
      id: randomUUID(),
      corporateName: args.input.corporateName,
      phone: args.input.phone,
      adress: args.input.adress,
      signupDate: new Date().toISOString(),
      declaredBilling: args.input.declaredBilling,
      bankDetails: args.input.bankDetails.map((bankInput) => ({
        agency: bankInput.agency,
        accountNumber: bankInput.accountNumber,
        bank: bankInput.bank,
      })),
    });

    const model = await createdCustomer.save();
    CustomerExtension.toModel(createdCustomer);
    const dto = CustomerExtension.toDTO(model);
    return dto;
  }

  async updateCustomer(args: any, context: any) {
    const filter = context?.headers?.id;
    const update = args.input;

    const updatedCustomer = await customer.findOneAndUpdate(
      { id: filter },
      update,
      {
        new: true,
      }
    );
    const model = updatedCustomer;
    CustomerExtension.toModel(model);
    const dto = CustomerExtension.toDTO(model);
    return dto;
  }

  async deleteCustomer({ input: { id } }) {
    const deletedCustomer = await customer.deleteOne({ id });
    return deletedCustomer.deletedCount === 1
      ? "Successfully removed!"
      : "Impossible to delete this customer. Try again with another id!";
  }
}

export default CustomerService;
