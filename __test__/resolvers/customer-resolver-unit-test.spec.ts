import { GraphQLError } from "graphql/error";
import {
  customerServiceMock,
  graphqlTestServerMock,
} from "../../__test__/graphql-test-server-mock";
import {
  axiosResponseErrorStub,
  getAllCustomersResponse,
  getCustomerByIdResponse,
  inputCustomerByIdStub,
  inputStub,
  queryStub,
} from "../stubs";

describe("CustomerResolver - unitary Tests", () => {
  let serverMock;

  beforeEach(() => {
    jest.setTimeout(10000);
    serverMock = graphqlTestServerMock;
    jest.clearAllMocks();
  });

  describe("getAllCustomers", () => {
    it("Should return response if QUERY is VALID", async () => {
      customerServiceMock.getAllCustomers.mockResolvedValue(
        getAllCustomersResponse
      );

      const response = await serverMock(queryStub.query.getAllCustomers);

      expect(Array.isArray(response.data.getAllCustomers));
      expect(response.data.getAllCustomers[0]).toHaveProperty("id");
      expect(response.data.getAllCustomers[0]).toHaveProperty("corporateName");
      expect(response.data.getAllCustomers[0]).toHaveProperty("adress");
      expect(response.data.getAllCustomers[0]).toHaveProperty("phone");
      expect(response.data.getAllCustomers[0]).toHaveProperty(
        "declaredBilling"
      );
      expect(response.data.getAllCustomers[0]).toHaveProperty("signupDate");
      expect(response.data.getAllCustomers[0].bankDetails[0]).toHaveProperty(
        "accountNumber"
      );
      expect(response.data.getAllCustomers[0].bankDetails[0]).toHaveProperty(
        "agency"
      );
      expect(response.data.getAllCustomers[0].bankDetails[0]).toHaveProperty(
        "bank"
      );
      expect(response.data.getAllCustomers).toMatchObject(
        getAllCustomersResponse
      );
      expect(response.errors).toBeUndefined();
    });
  });

  describe("getCustomerById", () => {
    it("Should return response if QUERY and INPUT(ID) ARE VALID", async () => {
      customerServiceMock.getCustomerById.mockResolvedValue(
        getCustomerByIdResponse
      );
      const response = await serverMock(
        queryStub.query.getCustomerById,
        {},
        { input: { inputCustomerByIdStub } }
      );

      // console.log(response.input);
      // expect(response.data.getCustomerById).toHaveProperty("id");
      // expect(response.data.getCustomerById).toHaveProperty("corporateName");
      // expect(response.data.getCustomerById).toHaveProperty("adress");
      // expect(response.data.getCustomerById).toHaveProperty("phone");
      // expect(response.data.getCustomerById).toHaveProperty("declaredBilling");
      // expect(response.data.getCustomerById).toHaveProperty("signupDate");
      // expect(response.data.getCustomerById.bankDetails[0]).toHaveProperty(
      //   "accountNumber"
      // );
      // expect(response.data.getCustomerById.bankDetails[0]).toHaveProperty(
      //   "agency"
      // );
      // expect(response.data.getCustomerById.bankDetails[0]).toHaveProperty(
      //   "bank"
      // );

      // expect(response.data.getCustomerById).toMatchObject(
      //   getCustomerByIdResponse
      // );
      // expect(response.data).toBeCalled();
    });

    it("Should return error if INPUT(ID) is NULL", async () => {
      customerServiceMock.getCustomerById.mockRejectedValue(
        axiosResponseErrorStub["getCustomerByIdInputError"]
      );

      const response = await serverMock(
        queryStub.query.getCustomerById,
        { headers: null },
        { input: inputStub.getCustomerById.null }
      );
      console.log(response.headers);
      console.log(response.errors);
      expect(response.errors[0]).toBeInstanceOf(GraphQLError);
      expect(response.data.getCustomerById).toBe(null);
      // expect(customerServiceMock.getCustomerById).toHaveBeenCalled();
    });
  });
});
