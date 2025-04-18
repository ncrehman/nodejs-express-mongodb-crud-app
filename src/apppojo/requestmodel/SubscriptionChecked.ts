import mongoose, { Schema, Document } from 'mongoose';

export interface ISubscriptionChecked extends Document {
    mobileNumber: string;
    sdpServiceId: string;
}

const SubscriptionCheckedSchema: Schema = new Schema({
    mobileNumber: { type: String},
    sdpServiceId: { type: String},
});


export default mongoose.model<ISubscriptionChecked>('SubscriptionChecked', SubscriptionCheckedSchema);