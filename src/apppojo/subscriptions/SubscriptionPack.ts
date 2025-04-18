import mongoose, { Schema, Document } from 'mongoose';

export interface ISubscriptionPack extends Document {
    id: string;
    packName: string;
    packNameArabic: string;
    createdDate: Date;
}

const SubscriptionPackSchema: Schema = new Schema({
    id: { type: String},
    packName: { type: String},
    packNameArabic: { type: String},
    createdDate: { type: Date},
});


export default mongoose.model<ISubscriptionPack>('SubscriptionPack', SubscriptionPackSchema);