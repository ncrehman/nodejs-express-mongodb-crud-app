import mongoose, { Schema, Document } from 'mongoose';

export interface IFavouriteListIds extends Document {
    id: string;
}

const FavouriteListIdsSchema: Schema = new Schema({
    id: { type: String},
});


export default mongoose.model<IFavouriteListIds>('FavouriteListIds', FavouriteListIdsSchema);