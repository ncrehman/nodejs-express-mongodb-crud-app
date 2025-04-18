import mongoose, { Schema, Document } from 'mongoose';

export interface ICustomerAutoRenewMessages extends Document {
    id: string;
    customerId: string;
    mobileNumber: string;
    message: string;
    isDelivered: boolean;
    description: string;
    messageDate: Date;
}

const CustomerAutoRenewMessagesSchema: Schema = new Schema({
    id: { type: String},
    customerId: { type: String},
    mobileNumber: { type: String},
    message: { type: String},
    isDelivered: { type: Boolean,  default: false},
    description: { type: String},
    messageDate: { type: Date},
});


export default mongoose.model<ICustomerAutoRenewMessages>('CustomerAutoRenewMessages', CustomerAutoRenewMessagesSchema);