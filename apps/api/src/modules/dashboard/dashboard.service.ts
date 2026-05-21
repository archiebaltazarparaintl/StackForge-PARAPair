/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';

@Injectable()
export class DashboardService {
  getAdminStats() {
    return {};
  }

  getBusinessStats(_id?: any) {
    return {};
  }

  getPersonalStats(_id?: any) {
    return {};
  }
}
