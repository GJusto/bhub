import BankDetailsDTO from "@domain/DTO/bank-details-DTO";
import BankDetailsModel from "@domain/model/bank-details-model";

class BankDetailsExtension {
  static toDTO(model: BankDetailsModel): BankDetailsDTO {
    return new BankDetailsDTO(model.agency, model.accountNumber, model.bank);
  }

  static toModel(result): BankDetailsModel {
    return new BankDetailsModel(
      result.agency,
      result.accountNumber,
      result.bank
    );
  }

  static toArrayModel(input): BankDetailsModel[] {
    return input.map(BankDetailsExtension.toModel);
  }

  static toArrayDTO(input: BankDetailsModel[]): BankDetailsDTO[] {
    return input.map(BankDetailsExtension.toDTO);
  }
}

export default BankDetailsExtension;
