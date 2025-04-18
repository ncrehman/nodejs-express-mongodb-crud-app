import mongoose, { Schema, Document } from 'mongoose';
import SubscribeProductResponse, { ISubscribeProductResponse } from './SubscribeProductResponse';

export interface IProductInitialBody extends Document {
    subscribeProductResponse: ISubscribeProductResponse;
}

const ProductInitialBodySchema: Schema = new Schema({
    subscribeProductResponse: { type: mongoose.Schema.Types.ObjectId, ref: SubscribeProductResponse},
});


export default mongoose.model<IProductInitialBody>('ProductInitialBody', ProductInitialBodySchema);