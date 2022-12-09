import { Injectable } from '@nestjs/common';
import { AppRequestContext } from 'src/utils/app-request.context';
import { getAppContext, getAppContextALS } from '../../../utils/context';

@Injectable()
export class NotificationService {
  constructor() {}

  async getNotifications() {
    const ctx = getAppContextALS<AppRequestContext>();
  }
}
