import { Component, OnInit, Input } from '@angular/core';
import { MessageLevel } from '../shared/enums/message-level.enum';
import { Message } from '../shared/models/message.model';

@Component({
  selector: 'app-logging',
  templateUrl: './logging.component.html',
  styleUrls: ['./logging.component.css']
})
export class LoggingComponent implements OnInit {

  @Input() messages: Message[];

  constructor() { }

  ngOnInit() {

  }

  getRowClass(level: MessageLevel) {
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
