import mongoose, { Schema, Document } from 'mongoose';
import ImageRequest, { IImageRequest } from '../requestmodel/ImageRequest';

export interface IImageResponse extends Document {
    url: any;
    width: number;
    height: number;
    size: number;
    imageObj: IImageRequest;
}

const ImageResponseSchema: Schema = new Schema({
    url: { type: any},
    width: { type: Number },
    height: { type: Number },
    size: { type: Number },
    imageObj: { type: mongoose.Schema.Types.ObjectId, ref: ImageRequest},
});


export default mongoose.model<IImageResponse>('ImageResponse', ImageResponseSchema);