import mongoose, { Schema, Document } from 'mongoose';
import PaymentOrderDetail, { IPaymentOrderDetail } from './PaymentOrderDetail';

export interface IPaymentFault extends Document {
    faultcode: string;
    faultstring: string;
    detail: IPaymentOrderDetail;
}

const PaymentFaultSchema: Schema = new Schema({
    faultcode: { type: String},
    faultstring: { type: String},
    detail: { type: mongoose.Schema.Types.ObjectId, ref: PaymentOrderDetail},
});


export default mongoose.model<IPaymentFault>('PaymentFault', PaymentFaultSchema);