import mongoose, { Schema, Document } from 'mongoose';
import SubscribeProductRsp, { ISubscribeProductRsp } from './SubscribeProductRsp';

export interface ISubscribeProductResponse extends Document {
    subscribeProductRsp: ISubscribeProductRsp;
}

const SubscribeProductResponseSchema: Schema = new Schema({
    subscribeProductRsp: { type: mongoose.Schema.Types.ObjectId, ref: SubscribeProductRsp},
});


export default mongoose.model<ISubscribeProductResponse>('SubscribeProductResponse', SubscribeProductResponseSchema);