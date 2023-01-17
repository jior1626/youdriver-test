import { Injectable } from '@nestjs/common';
import { Logger } from '@nestjs/common/services';
import { PaymentCardDto } from 'src/db/dto/payment/payment-card.dto';
import { SavePaymentDto } from 'src/db/dto/payment/save-payment.dto';
import { UserDto } from 'src/db/dto/user/user.dto';
import { UserEntity } from 'src/db/entities/user.entity';
import { MethodPaymentCardMapper } from 'src/db/repository/payment/mapper/payment.mapper';
import { PaymentRepositoryService } from 'src/db/repository/payment/payment-repository.service';
import { UserMapper } from 'src/db/repository/user/mapper/user.mapper';
import { UserRepositoryService } from 'src/db/repository/user/user-repository.service';
import { WompiService } from '../wompi/wompi.service';

@Injectable()
export class RiderService { 

    constructor(
        private userRepoService: UserRepositoryService,
        private paymentRepoService: PaymentRepositoryService,
        private wompiService: WompiService,
        private mapperUser: UserMapper,
        private mapperPayment: MethodPaymentCardMapper,
        private logger: Logger
    ) {}

    async getRiders(): Promise<UserDto[]>{
        var users: UserEntity[] = await this.userRepoService.getAllUserIsRider();
        return users.map(user => this.mapperUser.entityToDto(user));
    }

    async createPaymentMethod(data: SavePaymentDto): Promise<PaymentCardDto> {
        
       
        const user = await this.userRepoService.findUserById(data.user.id);

        if (!user) {
            throw new Error("User not exist.");
        }

        // Create user if not exist
        // if (!user) {
        //     let newUser = new UserDto();
        //     newUser.username = data.client.username;
        //     newUser.type = data.client.type;
        //     newUser.email = data.client.email;
        //     newUser.phone = data.client.phone;
        //     user = await this.userRepoService.createUser(newUser);
        // }

        if(data.type_payment == "card") {
            const methodPayments = user.methodPayments;

            if(methodPayments && methodPayments.length > 0 ) {

                const methodPayment = methodPayments.find(item => 
                    item.number_card == data.payment_card.number && 
                    item.cvc == data.payment_card.cvc &&
                    item.exp_month == data.payment_card.exp_month &&
                    item.exp_year == data.payment_card.exp_year
                );
               
                const paymentCardDto: PaymentCardDto = this.mapperPayment.entityToPaymentCardDto(methodPayment, user);
            
                return paymentCardDto;

            } else {

                let paymentCardDto = new PaymentCardDto();
                paymentCardDto.card_holder = user.username;
                paymentCardDto.number = data.payment_card.number;
                paymentCardDto.cvc = data.payment_card.cvc;
                paymentCardDto.exp_month = data.payment_card.exp_month;
                paymentCardDto.exp_year = data.payment_card.exp_year;

                const savePaymentWompi = await this.wompiService.createMethodPaymentByCard(paymentCardDto).then(item => item);

                if(savePaymentWompi.data.status == "CREATED") {
                    paymentCardDto.token = savePaymentWompi.data.data.id;
                } else {
                    throw new Error("No se pudo tokenizar la tarjeta.");
                }

                const savePaymentDB = await this.paymentRepoService.createMethodPayment(paymentCardDto, user);

                if (savePaymentDB) {
                    return paymentCardDto;
                } else {
                    throw new Error("No se pudo crear el metodo de pago.");
                    
                }
            }
        
        }
       
    }


}
