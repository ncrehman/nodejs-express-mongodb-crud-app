import mongoose, { Schema, Document } from 'mongoose';
import Languages, { ILanguages } from './Languages';

export interface IFaqs extends Document {
    id: string;
    question: string;
    answer: string;
    languageObj: ILanguages;
    createdDate: Date;
}

const FaqsSchema: Schema = new Schema({
    id: { type: String},
    question: { type: String},
    answer: { type: String},
    languageObj: { type: mongoose.Schema.Types.ObjectId, ref: Languages},
    createdDate: { type: Date},
});


export default mongoose.model<IFaqs>('Faqs', FaqsSchema);