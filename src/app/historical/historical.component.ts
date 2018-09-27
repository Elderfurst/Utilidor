import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../shared/utility.service';
import { Utility } from '../shared/models/utility.model';

@Component({
  selector: 'app-historical',
  templateUrl: './historical.component.html',
  styleUrls: ['./historical.component.css']
})
export class HistoricalComponent implements OnInit {

  utilityList: Utility [];

  constructor(private utilityService: UtilityService) {
    this.utilityList = this.utilityService.getAllUtilities();
   }

  ngOnInit() {
  }

}