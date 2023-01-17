import { WompiModule } from './modules/wompi/wompi.module';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { RiderModule } from './modules/rider/rider.module';
import { ConfigModule } from '@nestjs/config';
import envSettings from './config/enviroment';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DriverModule } from './modules/driver/driver.module';
import { config } from './config/typeorm.config';
import { WompiMiddleware } from './wompi.middleware';

@Module({
	imports: [
		
		ConfigModule.forRoot({
			envFilePath: envSettings.envPath,
			isGlobal: true,
		}),
		TypeOrmModule.forRoot(config),
		WompiModule,
		RiderModule,
		DriverModule
	],
	controllers: [],
	providers: [],
})
export class AppModule {
// export class AppModule implements NestModule {
	// configure(consumer: MiddlewareConsumer) {
    //     consumer
    //       .apply(WompiMiddleware)
    //       .forRoutes('cats');
	// }
}
