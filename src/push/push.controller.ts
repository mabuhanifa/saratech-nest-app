import { Body, Controller, Post } from '@nestjs/common';
import { PushNotificationDto } from './dto/push.dto';
import { PushService } from './push.service';

@Controller('push')
export class PushController {
  constructor(private readonly pushService: PushService) {}

  @Post('send-now')
  sendNow(@Body() body: PushNotificationDto) {
    return this.pushService.sendNotification(body);
  }

  @Post('schedule')
  schedule(@Body() body: PushNotificationDto) {
    return this.pushService.scheduleNotification(body);
  }
}
