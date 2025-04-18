import mongoose, { Schema, Document } from 'mongoose';

export interface ICategoryResponse extends Document {
    id: string;
    categoryName: string;
    alternateCategoryName: string;
    description: string;
    alternateDescription: string;
    categoryIconUrl: string;
    imageUrl: string;
}

const CategoryResponseSchema: Schema = new Schema({
    id: { type: String},
    categoryName: { type: String},
    alternateCategoryName: { type: String},
    description: { type: String},
    alternateDescription: { type: String},
    categoryIconUrl: { type: String},
    imageUrl: { type: String},
});


export default mongoose.model<ICategoryResponse>('CategoryResponse', CategoryResponseSchema);