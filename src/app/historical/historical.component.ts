import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../shared/utility.service';
import { Utility } from '../shared/models/utility.model';
import { Instance } from '../shared/models/instance.model';
import { Log } from '../shared/models/log.model';
import { TimeHelperService } from '../shared/services/time-helper.service';

@Component({
  selector: 'app-historical',
  templateUrl: './historical.component.html',
  styleUrls: ['./historical.component.css']
})
export class HistoricalComponent implements OnInit {

  dropdownText: string;
  instanceCount: number;
  instanceText: string;
  currentUtility: Utility;
  utilityList: Utility[];
  instanceList: Instance[];
  logList: Log[];

  constructor(private utilityService: UtilityService, private timeHelper: TimeHelperService) {
    this.dropdownText = 'Select a Utility';
    this.instanceCount = 10;
    this.instanceText = '10';
    this.utilityService.getAllUtilities().subscribe((data: Utility[]) => {
      this.utilityList = data;
    });
   }

  ngOnInit() {
  }

  showInstances(util: Utility) {
    this.dropdownText = util.name;
    this.currentUtility = util;
    this.utilityService.getInstances(util.id, this.instanceCount).subscribe((data: Instance[]) => {
      this.instanceList = data;

      this.instanceList.forEach((elem) => {
        elem.startTimeInSec = this.timeHelper.convertToSecondsFromEpox(elem.startTime.toString());

        if (elem.completeTime) {
          elem.completeTimeInSec = this.timeHelper.convertToSecondsFromEpox(elem.completeTime.toString());
          elem.elapsedTime = this.timeHelper.getDuration(elem.startTime.toString(), elem.completeTime.toString());
        } else {
          elem.elapsedTime = this.timeHelper.getDuration(elem.startTime.toString());
        }
      });
    });
  }

  showLogs(instance: Instance) {
    this.utilityService.getLogs(instance.id).subscribe((data: Log[]) => {
      this.logList = data;

      this.logList.forEach((elem) => {
        elem.timeInSeconds = this.timeHelper.convertToSecondsFromEpox(elem.timestamp.toString());
      });
    });
  }

  updateInstanceCount(count: number) {
    this.instanceCount = count;
    this.instanceText = count === -1 ? 'All' : this.instanceCount.toString();
    this.utilityService.getInstances(this.currentUtility.id, this.instanceCount).subscribe((data: Instance[]) => {
      this.instanceList = data;
    });
  }
}
