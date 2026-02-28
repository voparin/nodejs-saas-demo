import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('/hello')
  hello() {
    return { ok: true, service: 'api', message: 'hello' };
  }

  @Get('/health')
  health() {
    return { ok: true, service: 'api' };
  }
}
