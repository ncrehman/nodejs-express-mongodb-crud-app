import mongoose, { Schema, Document } from 'mongoose';

export interface IWelcomeMessageRequest extends Document {
    mobileNumber: string;
    messageList: Array<string>;
    source: string;
}

const WelcomeMessageRequestSchema: Schema = new Schema({
    mobileNumber: { type: String},
    messageList: { type: Array<String>, ref: String, required: true },
    source: { type: String},
});


export default mongoose.model<IWelcomeMessageRequest>('WelcomeMessageRequest', WelcomeMessageRequestSchema);