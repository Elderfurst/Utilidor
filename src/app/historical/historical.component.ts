import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../shared/utility.service';

@Component({
  selector: 'app-historical',
  templateUrl: './historical.component.html',
  styleUrls: ['./historical.component.css']
})
export class HistoricalComponent implements OnInit {

  utilityNameList: string [];

  constructor(private utilityService: UtilityService) {
    this.utilityNameList = this.utilityService.getUtilities();
   }

  ngOnInit() {
  }

}