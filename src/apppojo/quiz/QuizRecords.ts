import mongoose, { Schema, Document } from 'mongoose';
import QuizList, { IQuizList } from './QuizList';

export interface IQuizRecords extends Document {
    id: string;
    mobileNumber: string;
    customerId: string;
    questions: Array<IQuizList>;
    totalQuestion: number;
    attempted: number;
    answer: number;
    prizeWon: string;
    createdDate: Date;
}

const QuizRecordsSchema: Schema = new Schema({
    id: { type: String},
    mobileNumber: { type: String},
    customerId: { type: String},
    questions: { type: Array<mongoose.Schema.Types.ObjectId>, ref: QuizList, required: true },
    totalQuestion: { type: Number },
    attempted: { type: Number },
    answer: { type: Number },
    prizeWon: { type: String},
    createdDate: { type: Date},
});


export default mongoose.model<IQuizRecords>('QuizRecords', QuizRecordsSchema);