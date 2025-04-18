import mongoose, { Schema, Document } from 'mongoose';

export interface ICustomerPayment extends Document {
    id: string;
    mobileNumber: string;
    status: string;
    chargingRefence: string;
    description: string;
    amount: number;
    date: string;
    billingPeriod: string;
    localDate: string;
    chargingDate: Date;
    expiryDate: Date;
}

const CustomerPaymentSchema: Schema = new Schema({
    id: { type: String},
    mobileNumber: { type: String},
    status: { type: String},
    chargingRefence: { type: String},
    description: { type: String},
    amount: { type: Number},
    date: { type: String},
    billingPeriod: { type: String},
    localDate: { type: String},
    chargingDate: { type: Date},
    expiryDate: { type: Date},
});


export default mongoose.model<ICustomerPayment>('CustomerPayment', CustomerPaymentSchema);