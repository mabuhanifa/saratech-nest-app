import { IsISO8601, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class PushNotificationDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  message: string;

  @IsOptional()
  @IsISO8601()
  scheduleAt?: any;
}
