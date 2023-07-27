import CustomerDTO from "@domain/DTO/customer-DTO";
import CustomerModel from "@domain/model/customer-model";
import BankDetailsExtension from "./bank-details-extension";

class CustomerExtension {
  static toDTO(model: CustomerModel): CustomerDTO {
    return new CustomerDTO(
      model.id,
      model.corporateName,
      model.phone,
      model.adress,
      model.signupDate.toString(),
      model.declaredBilling,
      BankDetailsExtension.toArrayDTO(model.bankDetails)
    );
  }

  static toModel(result): CustomerModel {
    return new CustomerModel(
      result.id,
      result.corporateName,
      result.phone,
      result.adress,
      result.signupDate,
      result.declaredBilling,
      BankDetailsExtension.toArrayModel(result.bankDetails)
    );
  }

  static toArrayModel(input): CustomerModel[] {
    return input.map(CustomerExtension.toModel);
  }

  static toArrayDTO(input: CustomerModel[]): CustomerDTO[] {
    return input.map(CustomerExtension.toDTO);
  }
}

export default CustomerExtension;
