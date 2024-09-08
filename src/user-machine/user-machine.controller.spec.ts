import { Test, TestingModule } from '@nestjs/testing';
import { UserMachineController } from './user-machine.controller';

describe('UserMachineController', () => {
  let controller: UserMachineController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserMachineController],
    }).compile();

    controller = module.get<UserMachineController>(UserMachineController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
