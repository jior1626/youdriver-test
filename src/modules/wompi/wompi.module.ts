import { WompiService } from './wompi.service';
import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

@Module({
    imports: [HttpModule],
    controllers: [],
    providers: [
        WompiService
    ],
    exports: [WompiService]
})
export class WompiModule {

}
