import mongoose, { Schema, Document } from 'mongoose';

export interface IServiceException extends Document {
    messageId: string;
    text: string;
    variables: string;
}

const ServiceExceptionSchema: Schema = new Schema({
    messageId: { type: String},
    text: { type: String},
    variables: { type: String},
});


export default mongoose.model<IServiceException>('ServiceException', ServiceExceptionSchema);