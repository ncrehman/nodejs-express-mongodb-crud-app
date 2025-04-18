import mongoose, { Schema, Document } from 'mongoose';
import PortalPrices, { IPortalPrices } from './PortalPrices';
import ServicePrices, { IServicePrices } from './ServicePrices';
import CategoryPrices, { ICategoryPrices } from './CategoryPrices';

export interface ICustomerSubscriptionRequest extends Document {
    id: string;
    customerMobileNumber: string;
    customerId: string;
    vasHouseCustomerUiqueId: string;
    subscriptionType: string;
    portalPrices: IPortalPrices;
    servicePrices: IServicePrices;
    categoryPrices: ICategoryPrices;
    requestDate: Date;
}

const CustomerSubscriptionRequestSchema: Schema = new Schema({
    id: { type: String},
    customerMobileNumber: { type: String},
    customerId: { type: String},
    vasHouseCustomerUiqueId: { type: String},
    subscriptionType: { type: String},
    portalPrices: { type: mongoose.Schema.Types.ObjectId, ref: PortalPrices},
    servicePrices: { type: mongoose.Schema.Types.ObjectId, ref: ServicePrices},
    categoryPrices: { type: mongoose.Schema.Types.ObjectId, ref: CategoryPrices},
    requestDate: { type: Date},
});


export default mongoose.model<ICustomerSubscriptionRequest>('CustomerSubscriptionRequest', CustomerSubscriptionRequestSchema);