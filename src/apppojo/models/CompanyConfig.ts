import mongoose, { Schema, Document } from 'mongoose';

export interface ICompanyConfig extends Document {
    id: string;
    companyName: string;
    imagePath: string;
    imageUrl: string;
    enableRenewal: boolean;
    printConsole: boolean;
    day: string;
}

const CompanyConfigSchema: Schema = new Schema({
    id: { type: String },
    companyName: { type: String },
    imagePath: { type: String },
    imageUrl: { type: String },
    enableRenewal: { type: Boolean, default: false },
    printConsole: { type: Boolean, default: false },
    day: { type: String },
}, {
    collection: 'companyConfig'
});


export default mongoose.model<ICompanyConfig>('CompanyConfig', CompanyConfigSchema);