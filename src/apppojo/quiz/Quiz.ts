import mongoose, { Schema, Document } from 'mongoose';
import QuizOptions, { IQuizOptions } from './QuizOptions';
import QuizCategory, { IQuizCategory } from './QuizCategory';

export interface IQuiz extends Document {
    id: string;
    question: string;
    otherQuestion: string;
    options: Array<IQuizOptions>;
    answer: string;
    category: IQuizCategory;
    createdDate: Date;
    isCorrect: boolean;
}

const QuizSchema: Schema = new Schema({
    id: { type: String},
    question: { type: String},
    otherQuestion: { type: String},
    options: { type: Array<mongoose.Schema.Types.ObjectId>, ref: QuizOptions, required: true },
    answer: { type: String},
    category: { type: mongoose.Schema.Types.ObjectId, ref: QuizCategory},
    createdDate: { type: Date},
    isCorrect: { type: Boolean,  default: false},
});


export default mongoose.model<IQuiz>('Quiz', QuizSchema);