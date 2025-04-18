import mongoose, { Schema, Document } from 'mongoose';

export interface IFeedContentResponse extends Document {
    id: string;
    title: string;
    alternateTitle: string;
    shortDescription: string;
    alternateShortDescription: string;
    description: string;
    alternateDescription: string;
    likeCounts: number;
    imageUrl: string;
    serviceId: string;
    serviceName: string;
    alternateServiceName: string;
    categoryName: string;
    alternateCategoryName: string;
    categoryId: string;
    publishDate: Date;
    createdDate: Date;
}

const FeedContentResponseSchema: Schema = new Schema({
    id: { type: String},
    title: { type: String},
    alternateTitle: { type: String},
    shortDescription: { type: String},
    alternateShortDescription: { type: String},
    description: { type: String},
    alternateDescription: { type: String},
    likeCounts: { type: Number },
    imageUrl: { type: String},
    serviceId: { type: String},
    serviceName: { type: String},
    alternateServiceName: { type: String},
    categoryName: { type: String},
    alternateCategoryName: { type: String},
    categoryId: { type: String},
    publishDate: { type: Date},
    createdDate: { type: Date},
});


export default mongoose.model<IFeedContentResponse>('FeedContentResponse', FeedContentResponseSchema);