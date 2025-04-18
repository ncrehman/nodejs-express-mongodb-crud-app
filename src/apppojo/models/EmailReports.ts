import mongoose, { Schema, Document } from 'mongoose';

export interface IEmailReports extends Document {
    id: string;
    deliveryDate: Date;
}

const EmailReportsSchema: Schema = new Schema({
    id: { type: String},
    deliveryDate: { type: Date},
});


export default mongoose.model<IEmailReports>('EmailReports', EmailReportsSchema);