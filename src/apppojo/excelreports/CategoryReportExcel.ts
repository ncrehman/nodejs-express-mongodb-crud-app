import mongoose, { Schema, Document } from 'mongoose';

export interface ICategoryReportExcel extends Document {
    serialNo: string;
    categoryName: string;
    arabicCategoryName: string;
    description: string;
    arabicDescription: string;
    categoryIconUrl: string;
    sdpServiceId: string;
    price: number;
    extraCharges: number;
    showOnMobile: boolean;
    showOnWeb: boolean;
    createdDate: string;
}

const CategoryReportExcelSchema: Schema = new Schema({
    serialNo: { type: String},
    categoryName: { type: String},
    arabicCategoryName: { type: String},
    description: { type: String},
    arabicDescription: { type: String},
    categoryIconUrl: { type: String},
    sdpServiceId: { type: String},
    price: { type: Number},
    extraCharges: { type: Number},
    showOnMobile: { type: Boolean,  default: false},
    showOnWeb: { type: Boolean,  default: false},
    createdDate: { type: String},
});


export default mongoose.model<ICategoryReportExcel>('CategoryReportExcel', CategoryReportExcelSchema);