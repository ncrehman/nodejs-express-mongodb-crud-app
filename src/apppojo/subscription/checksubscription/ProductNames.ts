import mongoose, { Schema, Document } from 'mongoose';
import ProductName, { IProductName } from '../checksubscription/ProductName';

export interface IProductNames extends Document {
    productName: IProductName;
}

const ProductNamesSchema: Schema = new Schema({
    productName: { type: mongoose.Schema.Types.ObjectId, ref: ProductName},
});


export default mongoose.model<IProductNames>('ProductNames', ProductNamesSchema);