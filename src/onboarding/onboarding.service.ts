import { Injectable } from '@nestjs/common';

type OnboardingRecord = {
  onboardingId: string;
  status: 'REQUESTED';
  createdAt: string;
  payload: any;
  requestedBy: { userId: number; email: string };
};

@Injectable()
export class OnboardingService {
    private store: OnboardingRecord[] = [];

  create(payload: any, requestedBy: { userId: number; email: string }) {
    const onboardingId = `onb_${Date.now()}_${Math.random().toString(16).slice(2)}`;

    const record: OnboardingRecord = {
      onboardingId,
      status: 'REQUESTED',
      createdAt: new Date().toISOString(),
      payload,
      requestedBy,
    };

    this.store.push(record);

    return { onboardingId, status: record.status };
  }

  list() {
    return this.store;
  }
}
