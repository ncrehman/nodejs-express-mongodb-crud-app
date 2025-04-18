import mongoose, { Schema, Document } from 'mongoose';

export interface IUpdateStatus extends Document {
    serviceName: string;
    categroy: string;
    status: string;
    linkUrl: string;
    limit: number;
    publishedCount: number;
}

const UpdateStatusSchema: Schema = new Schema({
    serviceName: { type: String},
    categroy: { type: String},
    status: { type: String},
    linkUrl: { type: String},
    limit: { type: Number },
    publishedCount: { type: Number },
});


export default mongoose.model<IUpdateStatus>('UpdateStatus', UpdateStatusSchema);