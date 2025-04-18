import mongoose, { Schema, Document } from 'mongoose';
import CustomerCharging, { ICustomerCharging } from './CustomerCharging';

export interface IPaymentRefunds extends Document {
    id: string;
    refundDate: Date;
    customerMobileNumber: string;
    description: string;
    refundAmount: string;
    refundRefence: string;
    chargingRefence: string;
    customerId: string;
    refundStatus: boolean;
    customerCharging: ICustomerCharging;
}

const PaymentRefundsSchema: Schema = new Schema({
    id: { type: String},
    refundDate: { type: Date},
    customerMobileNumber: { type: String},
    description: { type: String},
    refundAmount: { type: String},
    refundRefence: { type: String},
    chargingRefence: { type: String},
    customerId: { type: String},
    refundStatus: { type: Boolean,  default: false},
    customerCharging: { type: mongoose.Schema.Types.ObjectId, ref: CustomerCharging},
});


export default mongoose.model<IPaymentRefunds>('PaymentRefunds', PaymentRefundsSchema);