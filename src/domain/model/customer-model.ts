import BankDetailsModel from "@domain/model/bank-details-model";

class ClientModel {
  readonly id: string;
  readonly corporateName: string;
  readonly phone: string;
  readonly adress: string;
  readonly signupDate: Date;
  readonly declaredBilling: number;
  readonly bankDetails: Array<BankDetailsModel>;

  constructor(
    id: string,
    corporateName: string,
    phone: string,
    adress: string,
    signupDate: Date,
    declaredBilling: number,
    bankDetails: Array<BankDetailsModel>
  ) {
    this.id = id;
    this.corporateName = corporateName;
    this.phone = phone;
    this.adress = adress;
    this.signupDate = signupDate;
    this.declaredBilling = declaredBilling;
    this.bankDetails = bankDetails;
  }
}

export default ClientModel;
