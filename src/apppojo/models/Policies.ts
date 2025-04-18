import mongoose, { Schema, Document } from 'mongoose';

export interface IPolicies extends Document {
    id: string;
    frenchTitle: string;
    englishTitle: string;
    endpointUrl: string;
    createdDate: Date;
}

const PoliciesSchema: Schema = new Schema({
    id: { type: String},
    frenchTitle: { type: String},
    englishTitle: { type: String},
    endpointUrl: { type: String},
    createdDate: { type: Date},
});


export default mongoose.model<IPolicies>('Policies', PoliciesSchema);