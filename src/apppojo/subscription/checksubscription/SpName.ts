import mongoose, { Schema, Document } from 'mongoose';
import LangInfo, { ILangInfo } from '../checksubscription/LangInfo';

export interface ISpName extends Document {
    langInfo: ILangInfo;
    name: string;
    value: string;
}

const SpNameSchema: Schema = new Schema({
    langInfo: { type: mongoose.Schema.Types.ObjectId, ref: LangInfo},
    name: { type: String},
    value: { type: String},
});


export default mongoose.model<ISpName>('SpName', SpNameSchema);