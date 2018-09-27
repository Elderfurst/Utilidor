import { Component, OnInit } from '@angular/core';
import { CurrentInstance } from '../shared/models/current-instance.model';
import { UtilityService } from '../shared/utility.service';
import { Log } from '../shared/models/log.model';
@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})
export class CurrentComponent implements OnInit {

  currentList: CurrentInstance[];
  currentMessages: Log[];

  constructor(private utilityService: UtilityService) {
    this.currentList = [];
    this.currentMessages = [];
  }

  ngOnInit() {
    this.utilityService.getCurrentInstances().subscribe((data: CurrentInstance[]) => {
      this.currentList = data;

      this.currentList.forEach((element) => {
        element.elapsedTime =  Date.now() - Date.parse('2018-09-16T18:39:27.49');
      });
    });
  }

  showInstanceDetail(instance: CurrentInstance) {
    this.utilityService.getLogs(instance.instanceId).subscribe((data: Log[]) => {
      this.currentMessages = data;
    });
  }
}
