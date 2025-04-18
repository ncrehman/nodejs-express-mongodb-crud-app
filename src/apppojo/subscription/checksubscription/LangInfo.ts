import mongoose, { Schema, Document } from 'mongoose';

export interface ILangInfo extends Document {
    country: string;
    language: string;
}

const LangInfoSchema: Schema = new Schema({
    country: { type: String},
    language: { type: String},
});


export default mongoose.model<ILangInfo>('LangInfo', LangInfoSchema);