import mongoose, { Schema, Document } from 'mongoose';
import LangInfo, { ILangInfo } from '../checksubscription/LangInfo';

export interface IParentName extends Document {
    langInfo: ILangInfo;
    name: string;
    value: string;
}

const ParentNameSchema: Schema = new Schema({
    langInfo: { type: mongoose.Schema.Types.ObjectId, ref: LangInfo},
    name: { type: String},
    value: { type: String},
});


export default mongoose.model<IParentName>('ParentName', ParentNameSchema);