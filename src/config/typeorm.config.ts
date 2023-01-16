import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import envSettings from "./enviroment";

export const config: TypeOrmModuleOptions = {
    type: "postgres",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: Boolean(process.env.DB_SYNCHRONIZE),
    entities: [ 
        __dirname + '/../db/entities/*.{ts,js}'
    ],
    migrations: [
        __dirname + '/../db/migrations/*.{ts,js}'
    ],
    migrationsRun: true,
    logging: true
}
