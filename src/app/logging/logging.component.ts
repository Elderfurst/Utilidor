import { Component, OnInit, Input } from '@angular/core';
import { LogLevel } from '../shared/enums/log-level.enum';
import { Log } from '../shared/models/log.model';

@Component({
  selector: 'app-logging',
  templateUrl: './logging.component.html',
  styleUrls: ['./logging.component.css']
})
export class LoggingComponent implements OnInit {

  @Input() messages: Log[];

  constructor() { }

  ngOnInit() {

  }

  getRowClass(level: LogLevel) {
    switch (level) {
      case 0:
        return '';
      case 1:
        return 'table-warning';
      case 2:
        return 'table-danger';
      default:
        return null;
    }
  }
}
