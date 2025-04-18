import mongoose, { Schema, Document } from 'mongoose';

export interface IRefundFailedMessage extends Document {
    id: string;
    mobileNumber: string;
    message: string;
    remarks: string;
    refundReference: string;
    status: boolean;
    messageDate: Date;
    sentDate: Date;
}

const RefundFailedMessageSchema: Schema = new Schema({
    id: { type: String},
    mobileNumber: { type: String},
    message: { type: String},
    remarks: { type: String},
    refundReference: { type: String},
    status: { type: Boolean,  default: false},
    messageDate: { type: Date},
    sentDate: { type: Date},
});


export default mongoose.model<IRefundFailedMessage>('RefundFailedMessage', RefundFailedMessageSchema);