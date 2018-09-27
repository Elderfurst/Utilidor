import { Component, OnInit } from '@angular/core';
import { Log } from '../shared/models/log.model';

@Component({
  selector: 'app-nav-tabs',
  templateUrl: './nav-tabs.component.html',
  styleUrls: ['./nav-tabs.component.css']
})
export class NavTabsComponent implements OnInit {

  messages: Log[] = [];
  messages1: Log[] = [];
  messages2: Log[] = [];
  messages3: Log[] = [];
  messages4: Log[] = [];

  constructor() {
  }

  ngOnInit() {
    this.messages1.push(new Log(1, new Date(), 0, 'This is an information Log'));
    this.messages1.push(new Log(1, new Date(), 0, 'This is an information Log'));
    this.messages1.push(new Log(1, new Date(), 0, 'This is an information Log'));
    this.messages1.push(new Log(1, new Date(), 0, 'This is an information Log'));
    this.messages1.push(new Log(1, new Date(), 0, 'This is an information Log'));
    this.messages1.push(new Log(1, new Date(), 1, 'This is a warning Log'));
    this.messages1.push(new Log(1, new Date(), 0, 'This is an information Log'));
    this.messages1.push(new Log(1, new Date(), 0, 'This is an information Log'));
    this.messages1.push(new Log(1, new Date(), 0, 'This is an information Log'));
    this.messages1.push(new Log(1, new Date(), 0, 'This is an information Log'));
    this.messages1.push(new Log(1, new Date(), 1, 'This is a warning Log'));
    this.messages1.push(new Log(1, new Date(), 1, 'This is a warning Log'));
    this.messages1.push(new Log(1, new Date(), 1, 'This is a warning Log'));
    this.messages1.push(new Log(1, new Date(), 2, 'This is an error Log'));
    this.messages1.push(new Log(1, new Date(), 0, 'This is an information Log'));
    this.messages1.push(new Log(1, new Date(), 0, 'This is an information Log'));
    this.messages1.push(new Log(1, new Date(), 0, 'This is an information Log'));
    this.messages1.push(new Log(1, new Date(), 0, 'This is an information Log'));
    this.messages1.push(new Log(1, new Date(), 0, 'This is an information Log'));

    this.messages2.push(new Log(2, new Date(), 0, 'This is an information Log'));
    this.messages3.push(new Log(3, new Date(), 1, 'This is a warning Log'));
    this.messages4.push(new Log(4, new Date(), 2, 'This is an error message'));
  }

  setMessages(num: number) {
    switch (num) {
      case 1:
        this.messages = this.messages1;
        break;
      case 2:
        this.messages = this.messages2;
        break;
      case 3:
        this.messages = this.messages3;
        break;
      case 4:
        this.messages = this.messages4;
        break;
      default:
        break;
    }
  }
}
