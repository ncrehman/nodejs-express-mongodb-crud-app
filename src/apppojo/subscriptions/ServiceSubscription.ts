import mongoose, { Schema, Document } from 'mongoose';

export interface IServiceSubscription extends Document {
    id: string;
    serviceId: string;
    serviceName: string;
    categoryId: string;
    categoryName: string;
    languaId: string;
    languaName: string;
    subscriptionPackId: string;
    subscriptionPackName: string;
    sdpServiceId: string;
    subscriptionPrice: string;
    extraCharges: string;
    totalAmount: string;
    chargingReference: string;
    customerId: string;
    customerMobileNumber: string;
    isAutoRenewable: boolean;
    isExpired: boolean;
    subscriptionDate: Date;
    expiryDate: Date;
}

const ServiceSubscriptionSchema: Schema = new Schema({
    id: { type: String},
    serviceId: { type: String},
    serviceName: { type: String},
    categoryId: { type: String},
    categoryName: { type: String},
    languaId: { type: String},
    languaName: { type: String},
    subscriptionPackId: { type: String},
    subscriptionPackName: { type: String},
    sdpServiceId: { type: String},
    subscriptionPrice: { type: String},
    extraCharges: { type: String},
    totalAmount: { type: String},
    chargingReference: { type: String},
    customerId: { type: String},
    customerMobileNumber: { type: String},
    isAutoRenewable: { type: Boolean,  default: false},
    isExpired: { type: Boolean,  default: false},
    subscriptionDate: { type: Date},
    expiryDate: { type: Date},
});


export default mongoose.model<IServiceSubscription>('ServiceSubscription', ServiceSubscriptionSchema);