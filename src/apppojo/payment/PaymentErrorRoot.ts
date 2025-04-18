import mongoose, { Schema, Document } from 'mongoose';
import PaymentErrorBody, { IPaymentErrorBody } from './PaymentErrorBody';

export interface IPaymentErrorRoot extends Document {
    Body: IPaymentErrorBody;
}

const PaymentErrorRootSchema: Schema = new Schema({
    Body: { type: mongoose.Schema.Types.ObjectId, ref: PaymentErrorBody},
});


export default mongoose.model<IPaymentErrorRoot>('PaymentErrorRoot', PaymentErrorRootSchema);