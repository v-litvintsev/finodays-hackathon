import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getTestMessage(): string {
    return 'Server works...';
  }
}
