import ClientDTO from "@domain/DTO/customer-DTO";
import ClientModel from "@domain/model/customer-model";
import BankDetailsExtension from "./bank-details-extension";

class CustomerExtension {
  static toDTO(model: ClientModel): ClientDTO {
    return new ClientDTO(
      model.id,
      model.corporateName,
      model.phone,
      model.adress,
      model.signupDate.toString(),
      model.declaredBilling,
      BankDetailsExtension.toArrayDTO(model.bankDetails)
    );
  }

  static toModel(result): ClientModel {
    return new ClientModel(
      result.id,
      result.corporateName,
      result.phone,
      result.adress,
      result.signupDate,
      result.declaredBilling,
      BankDetailsExtension.toArrayModel(result.bankDetails)
    );
  }

  static toArrayModel(input): ClientModel[] {
    return input.map(CustomerExtension.toModel);
  }

  static toArrayDTO(input: ClientModel[]): ClientDTO[] {
    return input.map(CustomerExtension.toDTO);
  }
}

export default CustomerExtension;
