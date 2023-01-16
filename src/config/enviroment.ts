import * as dotenv from 'dotenv'

const envSettings = () => {
    const envPath = 'src/env/.env.' + process.env.NODE_ENV;
    dotenv.config({ path: envPath });
    return { 
        envPath,
        PUBLIC_KEY: process.env.PUBLIC_KEY,
        PRIVATE_KEY: process.env.PRIVATE_KEY,
    }
}

export default envSettings()