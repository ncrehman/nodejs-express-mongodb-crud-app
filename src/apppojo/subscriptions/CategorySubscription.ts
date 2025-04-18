import mongoose, { Schema, Document } from 'mongoose';

export interface ICategorySubscription extends Document {
    id: string;
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

const CategorySubscriptionSchema: Schema = new Schema({
    id: { type: String},
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


export default mongoose.model<ICategorySubscription>('CategorySubscription', CategorySubscriptionSchema);