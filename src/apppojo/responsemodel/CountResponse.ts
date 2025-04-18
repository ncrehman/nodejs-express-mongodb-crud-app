import mongoose, { Schema, Document } from 'mongoose';

export interface ICountResponse extends Document {
    servicecouunt: number;
    feedscount: number;
}

const CountResponseSchema: Schema = new Schema({
    servicecouunt: { type: Number },
    feedscount: { type: Number },
});


export default mongoose.model<ICountResponse>('CountResponse', CountResponseSchema);