import mongoose, { Schema, Document } from 'mongoose';

export interface IEmailRequest extends Document {
    id: string;
    subject: string;
    description: string;
    roleName: string;
    loginId: string;
    loginName: string;
    isSent: boolean;
    sentDate: Date;
}

const EmailRequestSchema: Schema = new Schema({
    id: { type: String},
    subject: { type: String},
    description: { type: String},
    roleName: { type: String},
    loginId: { type: String},
    loginName: { type: String},
    isSent: { type: Boolean,  default: false},
    sentDate: { type: Date},
});


export default mongoose.model<IEmailRequest>('EmailRequest', EmailRequestSchema);