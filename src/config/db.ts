import mongoose from 'mongoose';
import dotenv from 'dotenv';
import logger from "./logger.utils"
dotenv.config();

const connectDB = async (): Promise<void> => {
    mongoose.connect(process.env.MONGO_URI as string, {
        minPoolSize: 5,
        maxPoolSize: 10,
        connectTimeoutMS: 30000,
        maxIdleTimeMS: 0,
        maxConnecting: 2,
        socketTimeoutMS: 10000,
    })
        .then(res => {
            logger.info('Connection Succesful...');
            return true;
        })
        .catch(err => {
            logger.info('Error in DB connection');
            return false;
        });
    mongoose.connection.on('connected', () =>  logger.info('Connected'));
    mongoose.connection.on('open', () => logger.info('open'));
    mongoose.connection.on('disconnected', () => logger.info('disconnected'));
    mongoose.connection.on('reconnected', () => logger.info('reconnected'));
    mongoose.connection.on('disconnecting', () => logger.info('disconnecting'));
    mongoose.connection.on('close', () => logger.info('close'));
};
export { connectDB }
// export default connectDB;
