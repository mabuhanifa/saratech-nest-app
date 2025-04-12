import { Injectable, Logger } from '@nestjs/common';
import { CronJob } from 'cron';
import { UserService } from 'src/user/user.service';
import { PushNotificationDto } from './dto/push.dto';

@Injectable()
export class PushService {
  private readonly logger = new Logger(PushService.name);

  constructor(private readonly usersService: UserService) {}

  async sendNotification(dto: PushNotificationDto) {
    const users = await this.usersService.findAll();
    users.forEach((user) => {
      this.logger.log(
        `📤 Sending to ${user.name} (${user.deviceToken}): ${dto.title} - ${dto.message}`,
      );
    });
    return { message: 'Notification sent to all users' };
  }

  scheduleNotification(dto: PushNotificationDto) {
    const scheduleDate = new Date(dto.scheduleAt);
    const job = new CronJob(scheduleDate, () => {
      this.sendNotification(dto);
      job.stop();
    });
    job.start();
    this.logger.log(
      `📅 Notification scheduled for ${scheduleDate.toISOString()}`,
    );
    return {
      message: `Notification scheduled for ${scheduleDate.toISOString()}`,
    };
  }
}
