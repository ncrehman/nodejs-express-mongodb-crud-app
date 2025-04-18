import mongoose, { Schema, Document } from 'mongoose';

export interface ICronReq extends Document {
    startLimit: number;
    endLimit: number;
    nextLimit: number;
    threadName: string;
}

const CronReqSchema: Schema = new Schema({
    startLimit: { type: Number },
    endLimit: { type: Number },
    nextLimit: { type: Number },
    threadName: { type: String},
});


export default mongoose.model<ICronReq>('CronReq', CronReqSchema);