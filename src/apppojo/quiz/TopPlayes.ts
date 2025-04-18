import mongoose, { Schema, Document } from 'mongoose';

export interface ITopPlayes extends Document {
    name: string;
    pointEarned: number;
    rank: number;
}

const TopPlayesSchema: Schema = new Schema({
    name: { type: String},
    pointEarned: { type: Number },
    rank: { type: Number },
});


export default mongoose.model<ITopPlayes>('TopPlayes', TopPlayesSchema);