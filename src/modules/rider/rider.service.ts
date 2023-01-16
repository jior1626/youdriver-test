import { Injectable } from '@nestjs/common';

@Injectable()
export class RiderService { 

    constructor() {}
    
    getHello(): string {
        return 'Hello World!';
    }
}
