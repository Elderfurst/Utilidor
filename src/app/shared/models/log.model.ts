import { LogLevel } from '../enums/log-level.enum';
import { TimeHelperService } from '../services/time-helper.service';

export class Log {
    id: number;
    instanceId: number;
    timestamp: Date;
    level: LogLevel;
    message: string;
    timeInSeconds: number;

    constructor(instanceId: number, timestamp: Date, level: LogLevel, message: string) {
        this.instanceId = instanceId;
        this.timestamp = timestamp;
        this.level = level;
        this.message = message;

        this.timeInSeconds = TimeHelperService.instance.convertToSecondsFromEpox(timestamp.toString());
    }
}
