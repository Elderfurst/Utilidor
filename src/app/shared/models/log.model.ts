import { LogLevel } from '../enums/log-level.enum';

export class Log {
    id: number;
    instanceId: number;
    timestamp: Date;
    level: LogLevel;
    message: string;

    constructor(instanceId: number, timestamp: Date, level: LogLevel, message: string) {
        this.instanceId = instanceId;
        this.timestamp = timestamp;
        this.level = level;
        this.message = message;
    }
}
