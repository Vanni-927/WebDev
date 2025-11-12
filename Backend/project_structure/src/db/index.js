//Connect to the database

import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';


//Things to remember: Async await and before that try catch to handle errors.

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`Database connected successfully: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error('Database connection error', error);
        process.exit(1);
    }
}

export default connectDB; 