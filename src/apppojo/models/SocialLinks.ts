import mongoose, { Schema, Document } from 'mongoose';

export interface ISocialLinks extends Document {
    id: string;
    title: string;
    linkUrl: string;
    imageIcon: string;
    createdDate: Date;
}

const SocialLinksSchema: Schema = new Schema({
    id: { type: String},
    title: { type: String},
    linkUrl: { type: String},
    imageIcon: { type: String},
    createdDate: { type: Date},
});


export default mongoose.model<ISocialLinks>('SocialLinks', SocialLinksSchema);