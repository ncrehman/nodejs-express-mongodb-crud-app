import mongoose, { Schema, Document } from 'mongoose';
import LangInfo, { ILangInfo } from '../checksubscription/LangInfo';

export interface IProductDesc extends Document {
    langInfo: ILangInfo;
    name: string;
    value: string;
}

const ProductDescSchema: Schema = new Schema({
    langInfo: { type: mongoose.Schema.Types.ObjectId, ref: LangInfo},
    name: { type: String},
    value: { type: String},
});


export default mongoose.model<IProductDesc>('ProductDesc', ProductDescSchema);