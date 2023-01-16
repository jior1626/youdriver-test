import * as dotenv from 'dotenv'

const envSettings = () => {
    const envPath = 'src/env/.env.' + process.env.NODE_ENV;
    dotenv.config({ path: envPath });
    return { 
        envPath,
        db_type: process.env.DB_TYPE,
        db_host: process.env.DB_HOST,
        db_port: parseInt(process.env.DB_PORT),
        db_user: process.env.DB_USER,
        db_password: process.env.DB_PASSWORD,
        db_name: process.env.DB_NAME,
        db_synchronize: Boolean(process.env.DB_SYNCHRONIZE),
        PUBLIC_KEY: process.env.PUBLIC_KEY,
        PRIVATE_KEY: process.env.PRIVATE_KEY,
    }
}

export default envSettings()