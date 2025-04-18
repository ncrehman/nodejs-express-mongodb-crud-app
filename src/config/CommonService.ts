import dotenv from 'dotenv';
import logger from "./logger.utils"
import CompanyConfig, { ICompanyConfig } from '../apppojo/models/CompanyConfig';
import DbLogs from '../apppojo/models/DbLogs';
import i18n from '../config/i18nConfig';
const moment = require('moment-timezone');

dotenv.config();
const getCurrenDate = async (): Promise<Date> => {
    const date = moment.tz(new Date(), process.env.TIMEZONE).format("YYYY-MM-DD HH:mm:ss:SSS");
    return date;
}
const getEndOfDay = async (daysToAdd: number): Promise<Date> => {
    const targetDate = moment.tz(new Date(), process.env.TIMEZONE).add(daysToAdd, 'days');
    const endOfDay: Date = targetDate.endOf('day').format("YYYY-MM-DD HH:mm:ss:SSS");
    return endOfDay;
}
const getStartOfDay = async (daysToAdd: number): Promise<Date> => {
    const targetDate = moment.tz(new Date(), process.env.TIMEZONE).add(daysToAdd, 'days');
    const endOfDay: Date = targetDate.startOf('day').format("YYYY-MM-DD HH:mm:ss:SSS");
    return endOfDay;
}
const getExpiryDate = async (minutes: number): Promise<Date> => {
    const targetDate = moment.tz(new Date(), process.env.TIMEZONE).add(minutes, 'minutes').format("YYYY-MM-DD HH:mm:ss:SSS");
    return targetDate;
}
const getStartDayOfDate = async (date: Date): Promise<Date> => {
    const targetDate = moment.tz(new Date(date), process.env.TIMEZONE);
    const startDay: Date = targetDate.startOf('day').format("YYYY-MM-DD HH:mm:ss:SSS");
    return startDay;
}
const getEndDayOfDate = async (date: Date): Promise<Date> => {
    const targetDate = moment.tz(new Date(date), process.env.TIMEZONE);
    const startDay: Date = targetDate.endOf('day').format("YYYY-MM-DD HH:mm:ss:SSS");
    return startDay;
}
const getStartDayOfMonth = async (): Promise<Date> => {
    const startOfMonth = moment.tz(new Date(), process.env.TIMEZONE).startOf('month').startOf('day').format("YYYY-MM-DD HH:mm:ss:SSS");
    return startOfMonth;
}
const getEndDayOfMonth = async (): Promise<Date> => {
    const endOfMonth = moment.tz(new Date(), process.env.TIMEZONE).endOf('month').endOf('day').format("YYYY-MM-DD HH:mm:ss:SSS");
    return endOfMonth;
}
const getDateWithMonthNumber = async (daysToAdd: number, month: number): Promise<Date> => {
    const date = moment.tz(new Date(), process.env.TIMEZONE).clone().add(month, 'months').startOf('month').add(daysToAdd, 'days').format("YYYY-MM-DD HH:mm:ss:SSS");
    return date;
}
const getChargingDateString = async (date: Date): Promise<string> => {
    return moment.tz(date, process.env.TIMEZONE).format("YYYY-MM-DD'T'HH:mm:ss");
}
const getStringDate = async (date: Date): Promise<string> => {
    return moment.tz(date, process.env.TIMEZONE).format("YYYY-MM-DD");
}
const getLocalDate = async (date: Date): Promise<string> => {
    return moment.tz(date, process.env.TIMEZONE).format("YYYY-MM-DD HH:mm:ss");
}
const getBillingPeriod = async (date: Date): Promise<string> => {
    return moment.tz(date, process.env.TIMEZONE).format("MMM-yyyy");
}
const getDateFromString = async (strDate: string): Promise<Date> => {
    return moment.tz(strDate, 'YYYY-MM-DD', process.env.TIMEZONE).toDate();
}
const getMonthString = async (date: Date): Promise<string> => {
    return moment.tz(date, process.env.TIMEZONE).format("MMM");
}
const getYearString = async (date: Date): Promise<string> => {
    return moment.tz(date, process.env.TIMEZONE).format("YYYY");
}
const getResponseMessage = async (text: string): Promise<string> => {
    return i18n.t(text);
}
const printLogs = async (apiName: string, input: string, output: string, shouldLog: boolean): Promise<void> => {
    const clientName = process.env.CLIENT || '';
    const abc = "\nclient: " + clientName
        + "\nmessage:" + apiName
        + "\ninput:" + input
        + "\noutput:" + output;
    if (shouldLog) {
        // const logs = new DbLogs();
        // logs.level = "INFO";
        // logs.message = apiName;
        // logs.input = input;
        // logs.output = output;
        // logs.apiInput = '';
        // logs.apiOutput = '';
        // logs.error = '';
        // logs.createdDate = await getCurrenDate();
        // logs.billingPeriod = await getBillingPeriod(logs.createdDate);
        // logs.date = await getStringDate(logs.createdDate);
        // logs.localDate = await getLocalDate(logs.createdDate);
        // await DbLogs.create(logs);
        // console.log('db logs: ' + JSON.stringify(logs))
        logger.info('log details : ' + abc);


    }
    const companyConfigObj = await CompanyConfig.findOne();
    if (!!companyConfigObj) {
        if (companyConfigObj.printConsole) {
            console.log('log details: ' + abc)
        }
    }
}

export {
    printLogs, getCurrenDate, getEndOfDay, getStartOfDay,
    getStartDayOfMonth, getEndDayOfMonth, getDateWithMonthNumber,
    getStringDate, getStartDayOfDate, getEndDayOfDate, getChargingDateString,
    getLocalDate, getBillingPeriod, getMonthString, getYearString,
    getExpiryDate, getResponseMessage, getDateFromString
}
// export default connectDB;
