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
        element.elapsedTime =  this.timeService.getDuration(element.startTime.toString());
      });
    });
  }

  showInstanceDetail(instance: CurrentInstance) {
    this.utilityService.getLogs(instance.instanceId).subscribe((data: Log[]) => {
      this.currentMessages = data;
    });
  }
}
