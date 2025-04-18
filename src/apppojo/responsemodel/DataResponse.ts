import mongoose, { Schema, Document } from 'mongoose';

export interface IDataResponse extends Document {
    respList: any ;
    count: number;
}

const DataResponseSchema: Schema = new Schema({
    respList: { type: Array<any>} ,
    count: { type: Number},
});


export default mongoose.model<IDataResponse>('DataResponse', DataResponseSchema);