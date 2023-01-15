import * as dotenv from 'dotenv'
// import * as moment from 'moment-timezone';

const envSettings = () => {
    const envPath = 'src/env/.env.' + process.env.NODE_ENV;
    dotenv.config({ path: envPath });
    // const dbStringConnection = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`;    
    return { 
        envPath, 
        // dbStringConnection,
        SECRET_KEY: process.env.SECRET_KEY,
        // getCurrentDateTime: (date: Date) => moment.tz(date, 'America/Bogota').format('DD/MM/YYYY hh:mm a')
    }
}

export default envSettings()