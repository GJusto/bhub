import { Schema, model } from "mongoose";

export const CustomerDbSchema = new Schema({
  id: String,
  corporateName: String,
  phone: String,
  adress: String,
  signupDate: Date,
  declaredBilling: Number,
  bankDetails: [
    {
      agency: String,
      accountNumber: String,
      bank: String,
    },
  ],
});

module.exports = model("customer", CustomerDbSchema);
