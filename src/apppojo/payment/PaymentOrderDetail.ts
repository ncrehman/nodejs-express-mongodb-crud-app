import mongoose, { Schema, Document } from 'mongoose';
import ServiceException, { IServiceException } from './ServiceException';

export interface IPaymentOrderDetail extends Document {
    PolicyException: IServiceException;
}

const PaymentOrderDetailSchema: Schema = new Schema({
    PolicyException: { type: mongoose.Schema.Types.ObjectId, ref: ServiceException},
});


export default mongoose.model<IPaymentOrderDetail>('PaymentOrderDetail', PaymentOrderDetailSchema);