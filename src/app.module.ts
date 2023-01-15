
import { Inject, Module } from '@nestjs/common';

import { RiderModule } from './modules/rider/rider.module';
import { ConfigModule } from '@nestjs/config';
import envSettings from './config/enviroment';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config/dist';
import { DriverModule } from './modules/driver/driver.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: envSettings.envPath,
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: [
          "src/db/**/entity/*.ts"
        ],
        synchronize: true,
      }),
      inject: [ConfigService]
    }),
    RiderModule,
    DriverModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
