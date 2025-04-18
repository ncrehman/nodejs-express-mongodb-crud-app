import mongoose, { Schema, Document } from 'mongoose';

export interface IFailedMessagesOld extends Document {
    id: string;
    mobileNumber: string;
    message: string;
    isSubmitted: boolean;
    createdDate: Date;
}

const FailedMessagesOldSchema: Schema = new Schema({
    id: { type: String},
    mobileNumber: { type: String},
    message: { type: String},
    isSubmitted: { type: Boolean,  default: false},
    createdDate: { type: Date},
});


export default mongoose.model<IFailedMessagesOld>('FailedMessagesOld', FailedMessagesOldSchema);