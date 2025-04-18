import mongoose, { Schema, Document } from 'mongoose';

export interface ISubscriptionType extends Document {
    id: string;
    subscriptionTypeName: string;
}

const SubscriptionTypeSchema: Schema = new Schema({
    id: { type: String},
    subscriptionTypeName: { type: String},
});


export default mongoose.model<ISubscriptionType>('SubscriptionType', SubscriptionTypeSchema);