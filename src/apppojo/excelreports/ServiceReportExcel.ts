import mongoose, { Schema, Document } from 'mongoose';

export interface IServiceReportExcel extends Document {
    serialNo: string;
    serviceName: string;
    serviceNameArabic: string;
    servicePrice: boolean;
    showOnMobile: boolean;
    showOnWeb: boolean;
    publishType: string;
    categoryName: string;
    arabicCategoryName: string;
    gender: string;
    feedLimit: number;
    createdDate: string;
}

const ServiceReportExcelSchema: Schema = new Schema({
    serialNo: { type: String},
    serviceName: { type: String},
    serviceNameArabic: { type: String},
    servicePrice: { type: Boolean,  default: false},
    showOnMobile: { type: Boolean,  default: false},
    showOnWeb: { type: Boolean,  default: false},
    publishType: { type: String},
    categoryName: { type: String},
    arabicCategoryName: { type: String},
    gender: { type: String},
    feedLimit: { type: Number },
    createdDate: { type: String},
});


export default mongoose.model<IServiceReportExcel>('ServiceReportExcel', ServiceReportExcelSchema);