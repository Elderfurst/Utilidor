import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeHelperService {
  static instance: TimeHelperService;

  example = '2018-09-16T18:39:27.49';

  constructor() {
    TimeHelperService.instance = this;
  }

  convertToSecondsFromEpox(dateTime: string): number {
    return Date.parse(dateTime);
  }

  getDuration(started: string, completed?: string): string {
    const startedSeconds = this.convertToSecondsFromEpox(started);
    let completedSeconds = Date.now();

    if (completed) {
      completedSeconds = this.convertToSecondsFromEpox(completed);
    }

    const durationSeconds = completedSeconds - startedSeconds;
    return this.formatDuration(durationSeconds);
  }

  formatDuration(seconds: number): string {
    const days = Math.floor(seconds / (3600 * 24));
    seconds -= days * 3600 * 24;
    const hrs   = Math.floor(seconds / 3600);
    seconds -= hrs * 3600;
    const mnts = Math.floor(seconds / 60);
    seconds -= mnts * 60;

    return `${days}days + ${hrs}:${mnts}:${seconds}`;
  }
}
