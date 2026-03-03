import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  it('hello() should return a hello payload', () => {
    expect(appController.hello()).toEqual({
      ok: true,
      service: 'api',
      message: 'hello',
    });
  });

  it('health() should return a health payload', () => {
    expect(appController.health()).toEqual({
      ok: true,
      service: 'api',
    });
  });
});

