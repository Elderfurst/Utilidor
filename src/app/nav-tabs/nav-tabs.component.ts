import { Component, OnInit } from '@angular/core';
import { Log } from '../shared/models/log.model';
import { TimeHelperService } from '../shared/services/time-helper.service';

@Component({
  selector: 'app-nav-tabs',
  templateUrl: './nav-tabs.component.html',
  styleUrls: ['./nav-tabs.component.css']
})
export class NavTabsComponent implements OnInit {

  messages: Log[] = [];

  constructor(
    private timeHelper: TimeHelperService
  ) {
  }

  ngOnInit() {
  }
}
