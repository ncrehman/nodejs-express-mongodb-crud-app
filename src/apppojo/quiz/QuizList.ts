import mongoose, { Schema, Document } from 'mongoose';

export interface IQuizList extends Document {
    quizId: string;
    question: string;
    answer: string;
    option: string;
    userAnswer: string;
    userOption: string;
}

const QuizListSchema: Schema = new Schema({
    quizId: { type: String},
    question: { type: String},
    answer: { type: String},
    option: { type: String},
    userAnswer: { type: String},
    userOption: { type: String},
});


export default mongoose.model<IQuizList>('QuizList', QuizListSchema);