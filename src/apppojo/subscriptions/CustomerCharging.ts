import mongoose, { Schema, Document } from 'mongoose';

export interface ICustomerCharging extends Document {
    id: string;
    mobileNumber: string;
    description: string;
    remarks: string;
    errorMessage: string;
    errorCode: string;
    amount: number;
    finalAmount: string;
    chargingRefence: string;
    localDate: string;
    chargingDate: Date;
    date: string;
    expiryDate: Date;
    billingPeriod: string;
    billingStatus: string;
}

const CustomerChargingSchema: Schema = new Schema({
    id: { type: String},
    mobileNumber: { type: String},
    description: { type: String},
    remarks: { type: String},
    errorMessage: { type: String},
    errorCode: { type: String},
    amount: { type: Number},
    finalAmount: { type: String},
    chargingRefence: { type: String},
    localDate: { type: String},
    chargingDate: { type: Date},
    date: { type: String},
    expiryDate: { type: Date},
    billingPeriod: { type: String},
    billingStatus: { type: String},
});


export default mongoose.model<ICustomerCharging>('CustomerCharging', CustomerChargingSchema);