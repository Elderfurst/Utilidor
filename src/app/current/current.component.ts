import { Component, OnInit } from '@angular/core';
import { CurrentInstanceModel } from '../shared/current-instance.model';
import { CurrentService } from '../shared/current.service';
@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})
export class CurrentComponent implements OnInit {

  currentList: CurrentInstanceModel[];

  constructor(private currentService: CurrentService) {
    this.currentList = [];
  }

  ngOnInit() {
    this.currentService.getCurrentInstances().subscribe((data: CurrentInstanceModel[]) => {
      this.currentList = data;

      this.currentList.forEach((element) => {
        element.ElapsedTime =  Date.now() - Date.parse('2018-09-16T18:39:27.49');
      });
    });
  }

  showInstanceDetail(instance: CurrentInstanceModel) {
    window.alert('Instance ' + instance.InstanceId + ' was clicked');
  }
}
