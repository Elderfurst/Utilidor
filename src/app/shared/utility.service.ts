import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  utilityNameList: string [];

  constructor() {
    this.utilityNameList = ['util1', 'util1', 'util3'];
   }

  getUtilities(): string[] {
    return this.utilityNameList;
  }
}
