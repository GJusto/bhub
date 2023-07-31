import CustomerService from "../../src/service/customer-service";

jest.mock("../../src/service/customer-service");

const makeSut = () => {
  const CustomerServiceMock =
    CustomerService as unknown as jest.Mock<CustomerService>;
  const customerServiceMock =
    new CustomerServiceMock() as jest.Mocked<CustomerService>;

  return customerServiceMock;
};

export default makeSut;
