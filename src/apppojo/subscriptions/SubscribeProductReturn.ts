import mongoose, { Schema, Document } from 'mongoose';
import ProductInitialBody, { IProductInitialBody } from './ProductInitialBody';

export interface ISubscribeProductReturn extends Document {
    Body: IProductInitialBody;
}

const SubscribeProductReturnSchema: Schema = new Schema({
    Body: { type: mongoose.Schema.Types.ObjectId, ref: ProductInitialBody},
});


export default mongoose.model<ISubscribeProductReturn>('SubscribeProductReturn', SubscribeProductReturnSchema);