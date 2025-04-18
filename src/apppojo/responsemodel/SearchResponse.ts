import mongoose, { Schema, Document } from 'mongoose';

export interface ISearchResponse extends Document {
    id: string;
    title: string;
    redirectinalUrl: string;
    description: string;
    imageUrl: string;
    otherUrl: string;
    createDate: Date;
}

const SearchResponseSchema: Schema = new Schema({
    id: { type: String},
    title: { type: String},
    redirectinalUrl: { type: String},
    description: { type: String},
    imageUrl: { type: String},
    otherUrl: { type: String},
    createDate: { type: Date},
});


export default mongoose.model<ISearchResponse>('SearchResponse', SearchResponseSchema);