import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { FcmService } from 'nestjs-fcm';
import * as firebaseAdmin from 'firebase-admin';
import { EntityManager } from 'typeorm';
import { UserEntity } from '../../main/entities/user.entity';
import { NotificationDto } from '../dtos/notification.dto';
import { getAppContextALS } from '../../../../src/utils/context';
import { AppRequestContext } from '../../../../src/utils/app-request.context';
import { DeviceEntity } from '../../../../src/modules/main/entities/device.entity';

export type NotificationResponse = {
  failureCount: number;
  successCount: number;
  failedDeviceIds: any[];
};

export interface SmsPayloadType{
  sms: String,
  provider?: String
}

@Injectable()
export class NotificationService {
  constructor(private service: FcmService, private em: EntityManager,private http: HttpService) {}


  
  async smsNotification(payload:SmsPayloadType){

      const res=  this.http.post('http://localhost:3000/api/sendSms',
      {
        "to":["233559876496"],
        "sms": "Hi Mike testing mic"
    })
    console.log("res",res)
   
  }
  // async sendUsersNotifications(input: NotificationDto) {
  //   const ctx = getAppContextALS<AppRequestContext>();
  //   const userDevice = await this.em.findOne(DeviceEntity, {
  //     where: { userId: ctx.authUser.userId },
  //   });
  //   const sendNotification = await this.sendNotifications(
  //     [userDevice.deviceId],
  //     input.title,
  //     input.message,
  //   );
  //   return sendNotification;
  // }

  // async sendNotifications(
  //   devices: string[],
  //   title: string,
  //   message: string,
  // ): Promise<NotificationResponse> {
  //   const payload: firebaseAdmin.messaging.MessagingPayload = {
  //     notification: {
  //       title: title,
  //       body: message,
  //     },
  //   };
  //   return await this.service.sendNotification(devices, payload, true);
  // }

  // async userDevices(): Promise<any[]> {
  //   const users: UserEntity[] = await this.em.find(UserEntity, {
  //     relations: ['devices'],
  //   });
  //   return users.flatMap((user) =>
  //     user.devices.map((device) => device.deviceId),
  //   );
  // }
}
