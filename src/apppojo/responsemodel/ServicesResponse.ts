import mongoose, { Schema, Document } from 'mongoose';

export interface IServicesResponse extends Document {
    id: string;
    serviceName: string;
    alternateServiceName: string;
    url: string;
    serviceIconUrl: string;
    gender: string;
    categoryName: string;
    alternateCategoryName: string;
    categoryId: string;
}

const ServicesResponseSchema: Schema = new Schema({
    id: { type: String},
    serviceName: { type: String},
    alternateServiceName: { type: String},
    url: { type: String},
    serviceIconUrl: { type: String},
    gender: { type: String},
    categoryName: { type: String},
    alternateCategoryName: { type: String},
    categoryId: { type: String},
});


export default mongoose.model<IServicesResponse>('ServicesResponse', ServicesResponseSchema);