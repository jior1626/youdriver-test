import { Injectable } from '@nestjs/common';
import { isEmpty } from 'rxjs';
import { PaymentResponse } from 'src/db/dto/payment/response-payment.dto';
import { SavePaymentDto } from 'src/db/dto/payment/save-payment.dto';
import { UserDto } from 'src/db/dto/user/user.dto';
import { UserEntity } from 'src/db/entities/user.entity';
import { UserMapper } from 'src/db/repository/user/mapper/user.mapper';
import { UserRepositoryService } from 'src/db/repository/user/user-repository.service';

@Injectable()
export class RiderService { 

    constructor(
        private userRepoService: UserRepositoryService,
        private mapper: UserMapper
    ) {}

    async getRiders(): Promise<UserDto[]>{
        var users: UserEntity[] = await this.userRepoService.getAllUserIsRider();
        return users.map(user => this.mapper.entityToDto(user));
    }

    async createPaymentMethod(data: SavePaymentDto): Promise<PaymentResponse>{
        
        let user = await this.userRepoService.findUserById(data.client.id);
        if (!user) {
            let newUser = new UserDto();
            newUser.username = data.client.username;
            newUser.type = data.client.type;
            newUser.email = data.client.email;
            newUser.phone = data.client.phone;
            user = await this.userRepoService.createUser(newUser);
        }

        let methodPayment = {};
        if(data.type_payment == "card") {
            methodPayment = user.methodPayments.find(item => item.number_card == data.payment_card.number && item.cvc == data.payment_card.cvc);
        } else if (data.type_payment == "nequi") {
            methodPayment = user.methodPayments.find(item => item.phone_number == data.payment_nequi.phone_number);
        }

        if(methodPayment != null) {
            
        } else {

        }
    
    }


}
