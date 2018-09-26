import { Component, OnInit } from '@angular/core';
import { CurrentInstanceModel } from '../shared/current-instance.model';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})
export class CurrentComponent implements OnInit {

  currentList: CurrentInstanceModel[];

  constructor() {
    this.currentList = [];
  }

  ngOnInit() {
    // Fake it till you make it
    this.currentList.push({ InstanceId: 1, UtilityName: 'Utility 1', StartTime: new Date(), AverageTime: 5,
                            ElapsedTime: 10, PercentComplete: 80 });
    this.currentList.push({ InstanceId: 2, UtilityName: 'Utility 2', StartTime: new Date(), AverageTime: 5,
                            ElapsedTime: 10, PercentComplete: 75 });
    this.currentList.push({ InstanceId: 3, UtilityName: 'Utility 3', StartTime: new Date(), AverageTime: 5,
                            ElapsedTime: 10, PercentComplete: 10 });
  }

}
