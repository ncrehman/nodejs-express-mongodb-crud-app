import mongoose, { Schema, Document } from 'mongoose';
import PortalPrices, { IPortalPrices } from '../subscriptions/PortalPrices';

export interface ISubscriptionRequest extends Document {
    mobileNumber: string;
    customerId: string;
    portalPrices: IPortalPrices;
    requestDate: Date;
    pinCode: string;
    description: string;
    subType: string;
}

const SubscriptionRequestSchema: Schema = new Schema({
    mobileNumber: { type: String},
    customerId: { type: String},
    portalPrices: { type: mongoose.Schema.Types.ObjectId, ref: PortalPrices},
    requestDate: { type: Date},
    pinCode: { type: String},
    description: { type: String},
    subType: { type: String},
});


export default mongoose.model<ISubscriptionRequest>('SubscriptionRequest', SubscriptionRequestSchema);