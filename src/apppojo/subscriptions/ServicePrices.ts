import mongoose, { Schema, Document } from 'mongoose';
import SubscriptionPack, { ISubscriptionPack } from './SubscriptionPack';
import Services, { IServices } from '../models/Services';

export interface IServicePrices extends Document {
    id: string;
    subscriptionPack: ISubscriptionPack;
    serviceObj: IServices;
    sdpServiceId: string;
    extraCharges: number;
    subscriptionPrice: number;
    createdDate: Date;
}

const ServicePricesSchema: Schema = new Schema({
    id: { type: String},
    subscriptionPack: { type: mongoose.Schema.Types.ObjectId, ref: SubscriptionPack},
    serviceObj: { type: mongoose.Schema.Types.ObjectId, ref: Services},
    sdpServiceId: { type: String},
    extraCharges: { type: Number},
    subscriptionPrice: { type: Number},
    createdDate: { type: Date},
});


export default mongoose.model<IServicePrices>('ServicePrices', ServicePricesSchema);