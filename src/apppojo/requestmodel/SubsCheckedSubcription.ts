import mongoose, { Schema, Document } from 'mongoose';

export interface ISubsCheckedSubcription extends Document {
    msisdn: string;
    service_code: string;
}

const SubsCheckedSubcriptionSchema: Schema = new Schema({
    msisdn: { type: String},
    service_code: { type: String},
});


export default mongoose.model<ISubsCheckedSubcription>('SubsCheckedSubcription', SubsCheckedSubcriptionSchema);