import { WompiModule } from './modules/wompi/wompi.module';
import { UserRepositoryModule } from './db/repository/user/user-repository.module';

import { Module } from '@nestjs/common';

import { RiderModule } from './modules/rider/rider.module';
import { ConfigModule } from '@nestjs/config';
import envSettings from './config/enviroment';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DriverModule } from './modules/driver/driver.module';
import { config } from './config/typeorm.config';

@Module({
	imports: [
		WompiModule,
		ConfigModule.forRoot({
			envFilePath: envSettings.envPath,
			isGlobal: true,
		}),
		TypeOrmModule.forRoot(config),
		RiderModule,
		DriverModule
	],
	controllers: [],
	providers: [],
})
export class AppModule {
}
