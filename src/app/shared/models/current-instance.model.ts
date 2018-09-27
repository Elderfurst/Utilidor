import { TimeHelperService } from '../services/time-helper.service';

export class CurrentInstance {
    utilityId: number;
    instanceId: number;
    utilityName: string;
    startTime: Date;
    elapsedTime: string;
    averageTime: number;
    percentComplete: number;
    startTimeInSeconds: number;
    elapsedTimeInSeconds: number;
}
