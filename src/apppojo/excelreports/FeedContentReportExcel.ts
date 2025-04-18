import mongoose, { Schema, Document } from 'mongoose';

export interface IFeedContentReportExcel extends Document {
    serialNo: string;
    title: string;
    arabicTitle: string;
    shortDescription: string;
    arabicShortDescription: string;
    contentList: string;
    arabicContentList: string;
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
    publishDate: string;
    statusName: string;
}

const FeedContentReportExcelSchema: Schema = new Schema({
    serialNo: { type: String},
    title: { type: String},
    arabicTitle: { type: String},
    shortDescription: { type: String},
    arabicShortDescription: { type: String},
    contentList: { type: String},
    arabicContentList: { type: String},
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
    publishDate: { type: String},
    statusName: { type: String},
});


export default mongoose.model<IFeedContentReportExcel>('FeedContentReportExcel', FeedContentReportExcelSchema);