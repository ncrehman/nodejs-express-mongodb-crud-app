import mongoose, { Schema, Document } from 'mongoose';

export interface ISendUpdateMail extends Document {
    id: string;
    fullName: string;
    mobileNumber: string;
    emailAddress: string;
    createdDate: Date;
}

const SendUpdateMailSchema: Schema = new Schema({
    id: { type: String},
    fullName: { type: String},
    mobileNumber: { type: String},
    emailAddress: { type: String},
    createdDate: { type: Date},
});


export default mongoose.model<ISendUpdateMail>('SendUpdateMail', SendUpdateMailSchema);