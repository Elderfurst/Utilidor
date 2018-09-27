import { Component, OnInit } from '@angular/core';
import { CurrentInstance } from '../shared/models/current-instance.model';
import { UtilityService } from '../shared/utility.service';
@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})
export class CurrentComponent implements OnInit {

  currentList: CurrentInstance[];

  constructor(private utilityService: UtilityService) {
    this.currentList = [];
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
    window.alert('Instance ' + instance.instanceId + ' was clicked');
  }
}
