import { ImageRequest } from "./ImageRequest";

export class RequestModel  {
    userId: string;
    searchKey: string;
    limit: number;
    offset: number;
    lang: string;
    extraVariable: string;
    otherVariable: string;
    reqObject: any;
    reqList: any ;
    imageObj: ImageRequest;
    imageObj2: ImageRequest;
    userType: any;
    reqArray: any;
    latitude: number;
    longitude: number;
    dateiseReport: boolean;
    authToken: string;
    role: any;
    idVariable: number;
    stringList: Array<string>;
    videoObj: any;
    docObj: any;
}
