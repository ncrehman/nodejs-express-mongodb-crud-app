import mongoose, { Schema, Document } from 'mongoose';

export interface Icontentstring extends Document {
    id: number;
    content: string;
}

const contentstringSchema: Schema = new Schema({
    id: { type: Number },
    content: { type: String},
});


export default mongoose.model<Icontentstring>('contentstring', contentstringSchema);