import mongoose, { Schema, Document } from 'mongoose';
import PortalPrices, { IPortalPrices } from '../subscriptions/PortalPrices';
import ServicePrices, { IServicePrices } from '../subscriptions/ServicePrices';

export interface ISubscriptionPricesResponse extends Document {
    portalPrices: IPortalPrices;
    servicePrices: IServicePrices;
}

const SubscriptionPricesResponseSchema: Schema = new Schema({
    portalPrices: { type: mongoose.Schema.Types.ObjectId, ref: PortalPrices},
    servicePrices: { type: mongoose.Schema.Types.ObjectId, ref: ServicePrices},
});


export default mongoose.model<ISubscriptionPricesResponse>('SubscriptionPricesResponse', SubscriptionPricesResponseSchema);