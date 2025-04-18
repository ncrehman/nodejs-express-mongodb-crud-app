import mongoose, { Schema, Document } from 'mongoose';

export interface IOtpVerificationRequest extends Document {
    mobileNumber: string;
    pincode: string;
    fieldValue: string;
    fieldType: string;
    userId: string;
    otp: string;
}

const OtpVerificationRequestSchema: Schema = new Schema({
    mobileNumber: { type: String},
    pincode: { type: String},
    fieldValue: { type: String},
    fieldType: { type: String},
    userId: { type: String},
    otp: { type: String},
});


export default mongoose.model<IOtpVerificationRequest>('OtpVerificationRequest', OtpVerificationRequestSchema);