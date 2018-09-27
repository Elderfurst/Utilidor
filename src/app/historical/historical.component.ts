import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../shared/utility.service';
import { Utility } from '../shared/models/utility.model';
import { Instance } from '../shared/models/instance.model';

@Component({
  selector: 'app-historical',
  templateUrl: './historical.component.html',
  styleUrls: ['./historical.component.css']
})
export class HistoricalComponent implements OnInit {

  dropdownText: string;
  utilityList: Utility[];
  instanceList: Instance[];

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
}
