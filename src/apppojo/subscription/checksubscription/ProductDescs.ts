import mongoose, { Schema, Document } from 'mongoose';
import ProductDesc, { IProductDesc } from '../checksubscription/ProductDesc';

export interface IProductDescs extends Document {
    productDesc: IProductDesc;
}

const ProductDescsSchema: Schema = new Schema({
    productDesc: { type: mongoose.Schema.Types.ObjectId, ref: ProductDesc},
});


export default mongoose.model<IProductDescs>('ProductDescs', ProductDescsSchema);