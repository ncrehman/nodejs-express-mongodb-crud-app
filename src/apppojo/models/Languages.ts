import mongoose, { Schema, Document } from 'mongoose';

export interface ILanguages extends Document {
    id: string;
    languageName: string;
    shortLanguageName: string;
    serviceLanguageName: string;
    showOnMobile: boolean;
    showOnWeb: boolean;
    createddate: Date;
}

const LanguagesSchema: Schema = new Schema({
    id: { type: String},
    languageName: { type: String},
    shortLanguageName: { type: String},
    serviceLanguageName: { type: String},
    showOnMobile: { type: Boolean,  default: false},
    showOnWeb: { type: Boolean,  default: false},
    createddate: { type: Date},
});


export default mongoose.model<ILanguages>('Languages', LanguagesSchema);