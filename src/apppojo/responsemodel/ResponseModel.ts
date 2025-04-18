export class ResponseModel {
    public statusCode: number = 0;
    public message: string;
    public authToken: string;
    public idVariable: number = 0;
    public totalRecords: number = 0;
    public variable: number = 0;
    public extraVariable: string;
    public respObject: any;
    public respList: any ;
    public respArray: any;
}

// const ResponseModelSchema: Schema = new Schema({
//     statusCode: { type: Number },
//     message: { type: String},
//     authToken: { type: String},
//     idVariable: { type: Number },
//     totalRecords: { type: Number},
//     variable: { type: Number},
//     extraVariable: { type: String},
//     respObject: { type: Schema.Types.Mixed},
//     respList: { type: Array<Schema.Types.Mixed>} ,
//     respArray: { type: Schema.Types.Mixed},
// });


// export default mongoose.model<IResponseModel>('ResponseModel', ResponseModelSchema);