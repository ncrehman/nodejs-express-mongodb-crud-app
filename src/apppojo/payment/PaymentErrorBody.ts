import mongoose, { Schema, Document } from 'mongoose';
import PaymentFault, { IPaymentFault } from './PaymentFault';

export interface IPaymentErrorBody extends Document {
    Fault: IPaymentFault;
}

const PaymentErrorBodySchema: Schema = new Schema({
    Fault: { type: mongoose.Schema.Types.ObjectId, ref: PaymentFault},
});


export default mongoose.model<IPaymentErrorBody>('PaymentErrorBody', PaymentErrorBodySchema);