import mongoose, { Schema, Document } from 'mongoose';
import Languages, { ILanguages } from './Languages';

export interface IRefundAndCancellation extends Document {
    id: string;
    description: string;
    languageObj: ILanguages;
    createdDate: Date;
}

const RefundAndCancellationSchema: Schema = new Schema({
    id: { type: String},
    description: { type: String},
    languageObj: { type: mongoose.Schema.Types.ObjectId, ref: Languages},
    createdDate: { type: Date},
});


export default mongoose.model<IRefundAndCancellation>('RefundAndCancellation', RefundAndCancellationSchema);