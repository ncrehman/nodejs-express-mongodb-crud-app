import mongoose, { Schema, Document } from 'mongoose';

export interface IRoles extends Document {
    id: string;
    rolesName: string;
    otherRolesName: string;
    rolesLevel: number;
}

const RolesSchema: Schema = new Schema({
    id: { type: String},
    rolesName: { type: String},
    otherRolesName: { type: String},
    rolesLevel: { type: Number },
});


export default mongoose.model<IRoles>('Roles', RolesSchema);