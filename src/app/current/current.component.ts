import { Component, OnInit } from '@angular/core';
import { CurrentInstance } from '../shared/models/current-instance.model';
import { UtilityService } from '../shared/utility.service';
import { TimeHelperService } from '../shared/services/time-helper.service';
import { Log } from '../shared/models/log.model';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})
export class CurrentComponent implements OnInit {

  currentList: CurrentInstance[];
  currentMessages: Log[];

  constructor(private utilityService: UtilityService, private timeService: TimeHelperService) {
    this.currentList = [];
    this.currentMessages = [];
  }

  ngOnInit() {
    this.utilityService.getCurrentInstances().subscribe((data: CurrentInstance[]) => {
      this.currentList = data;

      this.currentList.forEach((element) => {
        element.startTimeInSeconds = this.timeService.convertToSecondsFromEpox(element.startTime.toString());
        element.elapsedTimeInSeconds = Date.now() - element.startTimeInSeconds;
        element.elapsedTime = this.timeService.getDuration(element.startTime.toString());
      });
    });
  }

  showInstanceDetail(instance: CurrentInstance) {
    this.utilityService.getLogs(instance.instanceId).subscribe((data: Log[]) => {
      this.currentMessages = data;
    });
  }

  getBarColor(elapsed: number, avgTime: number) {
    if (elapsed < avgTime) {
      return 'info';
    } else if (elapsed >= avgTime && elapsed < (avgTime * 1.25)) {
      return 'warning';
    } else {
      return 'danger';
    }
  }
}
