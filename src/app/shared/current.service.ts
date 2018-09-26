import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { CurrentInstanceModel } from './current-instance.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrentService {

  constructor(private http: Http) { }

  getCurrentInstances(): CurrentInstanceModel[] {
    const currentList = [];

    // Fake it till you make it
    currentList.push({ InstanceId: 1, UtilityName: 'Utility 1', StartTime: new Date(), AverageTime: 5,
                       ElapsedTime: 10, PercentComplete: 80 });
    currentList.push({ InstanceId: 2, UtilityName: 'Utility 2', StartTime: new Date(), AverageTime: 5,
                       ElapsedTime: 10, PercentComplete: 75 });
    currentList.push({ InstanceId: 3, UtilityName: 'Utility 3', StartTime: new Date(), AverageTime: 5,
                       ElapsedTime: 10, PercentComplete: 10 });

    return currentList;
  }
}
