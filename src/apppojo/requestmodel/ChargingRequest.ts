import mongoose, { Schema, Document } from 'mongoose';

export interface IChargingRequest extends Document {
    chargingIpPort: string;
    input: string;
    url: string;
}

const ChargingRequestSchema: Schema = new Schema({
    chargingIpPort: { type: String},
    input: { type: String},
    url: { type: String},
});


export default mongoose.model<IChargingRequest>('ChargingRequest', ChargingRequestSchema);