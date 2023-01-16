import { UserRepositoryModule } from './db/repository/user/user-repository.module';

import { Inject, Module } from '@nestjs/common';

import { RiderModule } from './modules/rider/rider.module';
import { ConfigModule } from '@nestjs/config';
import envSettings from './config/enviroment';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config/dist';
import { DriverModule } from './modules/driver/driver.module';
import { DataSource } from 'typeorm';
import { config } from './config/typeorm.config';

@Module({
	imports: [
		UserRepositoryModule,
		ConfigModule.forRoot({
			envFilePath: envSettings.envPath,
			isGlobal: true,
		}),
		TypeOrmModule.forRoot(config),
		// TypeOrmModule.forRootAsync({
		// 	imports: [ConfigModule],
		// 	useFactory: (configService: ConfigService) => ({
		// 		type: 'postgres',
		// 		host: configService.get('DB_HOST'),
		// 		port: configService.get<number>('DB_PORT'),
		// 		username: configService.get('DB_USER'),
		// 		password: configService.get('DB_PASSWORD'),
		// 		database: configService.get('DB_NAME'),
		// 		entities: [
		// 			"/db/entities/**/*.entity.{ts,js}"
		// 		],
		// 		// migrations: [
		// 		//   "/db/migrations/*.{ts,js}"
		// 		// ],
		// 		synchronize: configService.get('DB_SYNCHRONIZE'),
		// 		// migrationsRun: true
		// 	}),
		// 	inject: [ConfigService]
		// }),
		RiderModule,
		DriverModule
	],
	controllers: [],
	providers: [],
})
export class AppModule {
	// constructor(private dataSource: DataSource) { 
	// 	this.dataSource.initialize();
	// }
}
