import mongoose, { Schema, Document } from 'mongoose';

export interface IQuizOptions extends Document {
    title: string;
    description: string;
    otherDescription: string;
    isSelected: boolean;
}

const QuizOptionsSchema: Schema = new Schema({
    title: { type: String},
    description: { type: String},
    otherDescription: { type: String},
    isSelected: { type: Boolean,  default: false},
});


export default mongoose.model<IQuizOptions>('QuizOptions', QuizOptionsSchema);