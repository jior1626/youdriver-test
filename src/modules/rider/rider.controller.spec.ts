import { Test, TestingModule } from '@nestjs/testing';
import { RiderController } from './rider.controller';
import { RiderService } from './rider.service';

describe('RiderController', () => {
  let riderController: RiderController;

  beforeEach(async () => {
    const rider: TestingModule = await Test.createTestingModule({
      controllers: [RiderController],
      providers: [RiderService],
    }).compile();

    riderController = rider.get<RiderController>(RiderController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(riderController.getHello()).toBe('Hello World!');
    });
  });
});
