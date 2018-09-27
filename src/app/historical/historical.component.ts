import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../shared/utility.service';
import { Utility } from '../shared/models/utility.model';
import { Instance } from '../shared/models/instance.model';
import { Logs } from '../../../node_modules/@types/selenium-webdriver';

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
  logList: Logs[];

  constructor(private utilityService: UtilityService) {
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
    });
  }

  showLogs(instance: Instance) {
    this.utilityService.getLogs(instance.id).subscribe((data: Logs[]) => {
      this.logList = data;
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
