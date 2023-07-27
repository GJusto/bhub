import BankDetailsDTO from "@domain/DTO/bank-details-DTO";

class CustomerDTO {
  readonly id: string;
  readonly corporateName: string;
  readonly phone: string;
  readonly adress: string;
  readonly signupDate: string;
  readonly declaredBilling: number;
  readonly bankDetails: Array<BankDetailsDTO>;

  constructor(
    id: string,
    corporateName: string,
    phone: string,
    adress: string,
    signupDate: string,
    declaredBilling: number,
    bankDetails: Array<BankDetailsDTO>
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

export default CustomerDTO;
