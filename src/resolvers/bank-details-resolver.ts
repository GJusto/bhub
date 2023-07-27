// import { CustomerDbSchema } from "@domain/repository/customer-db-schema";
// import { model } from "mongoose";

// model("customer", CustomerDbSchema);
// const customer = require("../domain/repository/customer-db-schema");

// const BankDetailsResolvers = {
//   Mutation: {
//     updateCustomerBankDetails: async (_, args, context) => {
//       const filter = {
//         id: context?.headers?.customer_id,
//         [`bankDetails.accountNumber`]: context?.headers?.account_number,
//       };
//       const update = args.input;
//       const updatedBankDetails = await customer.findOneAndUpdate(
//         { filter },
//         update,
//         {
//           new: true,
//         }
//       );
//       console.log(filter);
//       return "updatedBankDetails";
//     },
//   },
// };

// export default BankDetailsResolvers;
