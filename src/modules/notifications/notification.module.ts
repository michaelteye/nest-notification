import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { FcmModule } from 'nestjs-fcm';
import * as path from 'path';
import { NotificationController } from './controllers/notification.controller';
import { NotificationService } from './services/notification.service';

@Module({
  imports: [
    FcmModule.forRoot({
      firebaseSpecsPath: path.join(
        __dirname,
        './../../../bezobackendv2-firebase.json',
      ),
    }),
    HttpModule
  ],
  
  controllers: [NotificationController],
  providers: [NotificationService],
})
export class NotificationModule {}
