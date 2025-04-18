import mongoose, { Schema, Document } from 'mongoose';

export interface ICheckSubsReq extends Document {
    id: string;
    mobileNumber: string;
    type: number;
    recordIndex: number;
    batchSize: number;
    startDate: string;
    endDate: string;
    sequence: number;
}

const CheckSubsReqSchema: Schema = new Schema({
    id: { type: String},
    mobileNumber: { type: String},
    type: { type: Number },
    recordIndex: { type: Number },
    batchSize: { type: Number },
    startDate: { type: String},
    endDate: { type: String},
    sequence: { type: Number },
});


export default mongoose.model<ICheckSubsReq>('CheckSubsReq', CheckSubsReqSchema);