import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import envSettings from "./enviroment";

export const config: TypeOrmModuleOptions = {
    type: "postgres",
    host: envSettings.db_host,
    port: envSettings.db_port,
    username: envSettings.db_user,
    password: envSettings.db_password,
    database: envSettings.db_name,
    synchronize: envSettings.db_synchronize,
    entities: [ 
        __dirname + '/../db/entities/*.{ts,js}'
    ],
    migrations: [
        __dirname + '/../db/migrations/*.{ts,js}'
    ],
    migrationsRun: true,
    logging: true
}
