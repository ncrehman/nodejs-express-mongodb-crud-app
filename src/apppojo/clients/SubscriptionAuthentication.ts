import mongoose, { Schema, Document } from 'mongoose';

export interface ISubscriptionAuthentication extends Document {
    msisdn: string;
    service_connection_id: string;
    valid_until: string;
    isSubscribe: boolean;
    statusCode: number;
    message: string;
}

const SubscriptionAuthenticationSchema: Schema = new Schema({
    msisdn: { type: String},
    service_connection_id: { type: String},
    valid_until: { type: String},
    isSubscribe: { type: Boolean,  default: false},
    statusCode: { type: Number },
    message: { type: String},
});


export default mongoose.model<ISubscriptionAuthentication>('SubscriptionAuthentication', SubscriptionAuthenticationSchema);