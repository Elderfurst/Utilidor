import { MessageLevel } from '../enums/message-level.enum';

export class Message {
  time: number;
  level: MessageLevel;
  message: string;

  constructor(time: number, level: MessageLevel, message: string) {
    this.time = time;
    this.level = level;
    this.message = message;
  }
}
