import mongoose, { Schema, Document } from 'mongoose';

export interface IUnsubscribeRequest extends Document {
    mobileNumber: string;
    pinCode: string;
}

const UnsubscribeRequestSchema: Schema = new Schema({
    mobileNumber: { type: String},
    pinCode: { type: String},
});


export default mongoose.model<IUnsubscribeRequest>('UnsubscribeRequest', UnsubscribeRequestSchema);