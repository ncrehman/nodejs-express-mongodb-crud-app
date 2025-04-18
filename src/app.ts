import Express, { NextFunction, Request, Response } from "express"
import { Exception } from "./models/Exception"
import { ErrorDataType, ErrorType } from "./models/Error.schema"
import dotenv from 'dotenv';
import {connectDB} from './config/db';
import usersRoutes from './routes/UsersRoutes';
import logger from "./config/logger.utils";

import i18next from 'i18next';
import Backend from 'i18next-fs-backend';
import middleware from 'i18next-http-middleware';
import i18n from './config/i18nConfig';
import { printLogs } from "./config/CommonService";

const app = Express();
app.use(Express.json());
app.use(middleware.handle(i18next));
const initializeExpress = async () => {
    dotenv.config();
    connectDB();

    const app = Express()

    app.use(Express.json({
        verify: (req: Request, res: Response, buf: Buffer) => {
            res.locals = {
                rawBody: buf.toString()
            }
        }
    }))

    // Request Logger.
    app.use('/', async (req: Request, res: Response, next: NextFunction) => {
        const lang = req.body.lang;
        if (!!lang) {
            i18n.changeLanguage(lang);
            res.cookie('i18next', lang);
        }
        // console.log('first api used start: ' + req.get('Auth'))
        // console.log('headers'+JSON.stringify(req.headers));
        // logger.info(JSON.stringify(req.body));
        res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    })
    // Routes
    app.use('/api/users', usersRoutes);

    // Error Handler.
    app.use((err: any, req: Request, res: Response, next: NextFunction) => {
        console.log('sidle:', err);
        if (err instanceof Exception) {
            const errorData = {
                code: err.code,
                message: err.message,
                data: err.errorData,
                type: ErrorType.domainError
            } as ErrorDataType;
            res.status(err.code).json({
                message: {
                    ack: {
                        status: "NACK"
                    }
                },
                error: errorData
            });
        }
        else {
            res.status(err.code || 500).json({
                message: {
                    ack: {
                        status: "NACK"
                    }
                },
                error: err
            });
        }
    })

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
        printLogs('Protocol Server started on PORT ',PORT+'','',true);
        // logger.info('Protocol Server started on PORT : ' + PORT);
        // successCallback();
    })
}



// app.use('/', async (req: Request, res: Response, next: NextFunction) => {
//     //logger.info(JSON.stringify(req.body));
//     console.log('ok cors')
//     res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// })
// // Routes
// app.use('/api/users', usersRoutes);

// export default app;
initializeExpress();