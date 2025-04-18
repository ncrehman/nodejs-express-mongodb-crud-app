import mongoose, { Schema, Document } from 'mongoose';
import UnSubscribeProductRsp, { IUnSubscribeProductRsp } from './UnSubscribeProductRsp';

export interface IUnSubscribeProductResponse extends Document {
    unSubscribeProductRsp: IUnSubscribeProductRsp;
}

const UnSubscribeProductResponseSchema: Schema = new Schema({
    unSubscribeProductRsp: { type: mongoose.Schema.Types.ObjectId, ref: UnSubscribeProductRsp},
});


export default mongoose.model<IUnSubscribeProductResponse>('UnSubscribeProductResponse', UnSubscribeProductResponseSchema);