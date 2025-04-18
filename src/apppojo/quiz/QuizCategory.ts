import mongoose, { Schema, Document } from 'mongoose';

export interface IQuizCategory extends Document {
    id: string;
    categoryName: string;
    otherName: string;
    description: string;
    otherDescription: string;
    categoryIconUrl: string;
    imageUrl: string;
    showOnMobile: boolean;
    showOnWeb: boolean;
    createdDate: Date;
}

const QuizCategorySchema: Schema = new Schema({
    id: { type: String},
    categoryName: { type: String},
    otherName: { type: String},
    description: { type: String},
    otherDescription: { type: String},
    categoryIconUrl: { type: String},
    imageUrl: { type: String},
    showOnMobile: { type: Boolean,  default: false},
    showOnWeb: { type: Boolean,  default: false},
    createdDate: { type: Date},
});


export default mongoose.model<IQuizCategory>('QuizCategory', QuizCategorySchema);