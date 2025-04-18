import mongoose, { Schema, Document } from 'mongoose';

export interface IStatus extends Document {
    id: string;
    statusName: string;
    usedFor: string;
    createdDate: Date;
}

const StatusSchema: Schema = new Schema({
    id: { type: String},
    statusName: { type: String},
    usedFor: { type: String},
    createdDate: { type: Date},
});


export default mongoose.model<IStatus>('Status', StatusSchema);