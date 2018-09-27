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
  utilityList: Utility[];
  instanceList: Instance[];
  logList: Logs[];

  constructor(private utilityService: UtilityService) {
    this.dropdownText = 'Select a Utility';
    this.utilityService.getAllUtilities().subscribe((data: Utility[]) => {
      this.utilityList = data;
    });
   }

  ngOnInit() {
  }

  showInstances(util: Utility) {
    this.dropdownText = util.name;
    this.utilityService.getInstances(util.id).subscribe((data: Instance[]) => {
      this.instanceList = data;
    });
  }

  showLogs(instance: Instance) {
    this.utilityService.getLogs(instance.id).subscribe((data: Logs[]) => {
      this.logList = data;
    });
  }
}
