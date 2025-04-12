import { Module } from '@nestjs/common';
import { UserModule } from 'src/user/user.module';
import { PushController } from './push.controller';
import { PushService } from './push.service';

@Module({
  imports: [UserModule],
  controllers: [PushController],
  providers: [PushService],
})
export class PushModule {}
