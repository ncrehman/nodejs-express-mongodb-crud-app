import mongoose, { Schema, Document } from 'mongoose';
import PaymentErrorRoot, { IPaymentErrorRoot } from '../payment/PaymentErrorRoot';
import CustomerCharging, { ICustomerCharging } from '../subscriptions/CustomerCharging';
import SubscribeProductReturn, { ISubscribeProductReturn } from '../subscriptions/SubscribeProductReturn';

export interface IChargingResponse extends Document {
    status: number;
    message: string;
    extravariable: string;
    responseList: any ;
    paymentErrorRoot: IPaymentErrorRoot;
    customerCharging: ICustomerCharging;
    productError: ISubscribeProductReturn;
}

const ChargingResponseSchema: Schema = new Schema({
    status: { type: Number },
    message: { type: String},
    extravariable: { type: String},
    responseList: { type: Array<any>} ,
    paymentErrorRoot: { type: mongoose.Schema.Types.ObjectId, ref: PaymentErrorRoot},
    customerCharging: { type: mongoose.Schema.Types.ObjectId, ref: CustomerCharging},
    productError: { type: mongoose.Schema.Types.ObjectId, ref: SubscribeProductReturn},
});


export default mongoose.model<IChargingResponse>('ChargingResponse', ChargingResponseSchema);