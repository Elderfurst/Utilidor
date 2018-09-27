import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeHelperService {

  example = '2018-09-16T18:39:27.49';

  constructor() { }

  convertToSecondsFromEpox(dateTime: string): number {
    return Date.parse(dateTime);
  }
}
