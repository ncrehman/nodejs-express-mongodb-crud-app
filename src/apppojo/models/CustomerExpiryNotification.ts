import mongoose, { Schema, Document } from 'mongoose';

export interface ICustomerExpiryNotification extends Document {
    id: string;
    customerId: string;
    mobileNumber: string;
    messageId: string;
    message: string;
    isDelivered: boolean;
    description: string;
    messageDate: Date;
}

const CustomerExpiryNotificationSchema: Schema = new Schema({
    id: { type: String},
    customerId: { type: String},
    mobileNumber: { type: String},
    messageId: { type: String},
    message: { type: String},
    isDelivered: { type: Boolean,  default: false},
    description: { type: String},
    messageDate: { type: Date},
});


export default mongoose.model<ICustomerExpiryNotification>('CustomerExpiryNotification', CustomerExpiryNotificationSchema);