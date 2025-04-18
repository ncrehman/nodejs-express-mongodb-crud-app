import mongoose, { Schema, Document } from 'mongoose';
import Category, { ICategory } from './Category';

export interface IServices extends Document {
    id: string;
    serviceName: string;
    description: string;
    alternateServiceName: string;
    alternateDescription: string;
    publishType: boolean;
    serviceIconUrl: string;
    showOnMobile: boolean;
    showOnWeb: boolean;
    isAutomatic: boolean;
    categoryObj: ICategory;
    contentCount: number;
    gender: string;
    feedLimit: number;
    createdDate: Date;
}

const ServicesSchema: Schema = new Schema({
    id: { type: String},
    serviceName: { type: String},
    description: { type: String},
    alternateServiceName: { type: String},
    alternateDescription: { type: String},
    publishType: { type: Boolean,  default: false},
    serviceIconUrl: { type: String},
    showOnMobile: { type: Boolean,  default: false},
    showOnWeb: { type: Boolean,  default: false},
    isAutomatic: { type: Boolean,  default: false},
    categoryObj: { type: mongoose.Schema.Types.ObjectId, ref: Category},
    contentCount: { type: Number },
    gender: { type: String},
    feedLimit: { type: Number },
    createdDate: { type: Date},
});


export default mongoose.model<IServices>('Services', ServicesSchema);