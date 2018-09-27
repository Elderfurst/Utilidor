import { Component, OnInit } from '@angular/core';
import { Message } from '../shared/models/message.model';
import { TimeHelperService } from '../shared/services/time-helper.service';

@Component({
  selector: 'app-nav-tabs',
  templateUrl: './nav-tabs.component.html',
  styleUrls: ['./nav-tabs.component.css']
})
export class NavTabsComponent implements OnInit {

  messages: Message[] = [];
  messages1: Message[] = [];
  messages2: Message[] = [];
  messages3: Message[] = [];
  messages4: Message[] = [];

  constructor(
    private timeHelper: TimeHelperService
  ) {
  }

  ngOnInit() {
    this.messages1.push(new Message(Date.now(), 0, 'This is an information message'));
    this.messages1.push(new Message(Date.now(), 0, 'This is an information message'));
    this.messages1.push(new Message(Date.now(), 0, 'This is an information message'));
    this.messages1.push(new Message(Date.now(), 0, 'This is an information message'));
    this.messages1.push(new Message(Date.now(), 0, 'This is an information message'));
    this.messages1.push(new Message(Date.now(), 1, 'This is a warning message'));
    this.messages1.push(new Message(Date.now(), 0, 'This is an information message'));
    this.messages1.push(new Message(Date.now(), 0, 'This is an information message'));
    this.messages1.push(new Message(Date.now(), 0, 'This is an information message'));
    this.messages1.push(new Message(Date.now(), 0, 'This is an information message'));
    this.messages1.push(new Message(Date.now(), 1, 'This is a warning message'));
    this.messages1.push(new Message(Date.now(), 1, 'This is a warning message'));
    this.messages1.push(new Message(Date.now(), 1, 'This is a warning message'));
    this.messages1.push(new Message(Date.now(), 2, 'This is an error message'));
    this.messages1.push(new Message(Date.now(), 0, 'This is an information message'));
    this.messages1.push(new Message(Date.now(), 0, 'This is an information message'));
    this.messages1.push(new Message(Date.now(), 0, 'This is an information message'));
    this.messages1.push(new Message(Date.now(), 0, 'This is an information message'));
    this.messages1.push(new Message(Date.now(), 0, 'This is an information message'));

    this.messages2.push(new Message(Date.now(), 0, 'This is an information message'));
    this.messages3.push(new Message(Date.now(), 1, 'This is a warning message'));
    this.messages4.push(new Message(Date.now(), 2, 'This is an error message'));

    console.log(this.timeHelper.convertToSecondsFromEpox('2018-09-16T18:39:27.49'));
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
