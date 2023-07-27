class BankDetailsDTO {
  readonly agency: string;
  readonly accountNumber: string;
  readonly bank: string;

  constructor(agency: string, accountNumber: string, bank: string) {
    this.agency = agency;
    this.accountNumber = accountNumber;
    this.bank = bank;
  }
}

export default BankDetailsDTO;
