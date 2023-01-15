import * as dotenv from 'dotenv'
// import * as moment from 'moment-timezone';

const envSettings = () => {
    const envPath = 'src/env/.env.' + process.env.NODE_ENV;
    dotenv.config({ path: envPath });
    return { 
        envPath, 
        PUBLIC_KEY: process.env.PUBLIC_KEY,
        PRIVATE_KEY: process.env.PRIVATE_KEY,
        // getCurrentDateTime: (date: Date) => moment.tz(date, 'America/Bogota').format('DD/MM/YYYY hh:mm a')
    }
}

export default envSettings()