import mongoose, { Schema, Document } from 'mongoose';

export interface IRegistrationRequest extends Document {
    customerName: string;
    customerMobileNumber: string;
    emailId: string;
}

const RegistrationRequestSchema: Schema = new Schema({
    customerName: { type: String},
    customerMobileNumber: { type: String},
    emailId: { type: String},
});


export default mongoose.model<IRegistrationRequest>('RegistrationRequest', RegistrationRequestSchema);