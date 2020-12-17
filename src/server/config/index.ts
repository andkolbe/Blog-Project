import * as dotenv from 'dotenv';

const envFound = dotenv.config();

if (!envFound) { // don't run the application if there isn't a .env file
    throw new Error('You need to add a .env file');
}

export default {
    mysql: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_SCHEMA
    },
    app: {
        prefix: process.env.API_PREFIX // this will hide the /api route data from any randos who go on the web page and try to type it in the url bar it
    },
    auth: {
        secret: process.env.JWT_SECRET,
        expires: process.env.JWT_EXPIRES
    }
}