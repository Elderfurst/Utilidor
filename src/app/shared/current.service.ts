import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { CurrentInstanceModel } from './current-instance.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CurrentService {

  currentList: CurrentInstanceModel[];

  constructor(private http: Http) {
    this.currentList = [];
  }

  getCurrentInstances(): Observable<any> {
    return this.http.get(environment.utiladorApi + '/utility/running')
                    .pipe(map(res => res.json()));
  }

  getCurrentInstance(id: number): CurrentInstanceModel {
    const retVal = this.currentList.find(i => i.instanceId === id);
    return retVal;
  }

  // fakeCurrentInstanceData() {
  //   // Fake it till you make it
  //   this.currentList.push({ UtilityId: 1, InstanceId: 1, UtilityName: 'Utility 1', StartTime: new Date(), AverageTime: 5,
  //                      ElapsedTime: 10, PercentComplete: 80 });
  //   this.currentList.push({ UtilityId: 2, InstanceId: 2, UtilityName: 'Utility 2', StartTime: new Date(), AverageTime: 15,
  //                      ElapsedTime: 10, PercentComplete: 75 });
  //   this.currentList.push({ UtilityId: 3, InstanceId: 3, UtilityName: 'Utility 3', StartTime: new Date(), AverageTime: 7,
  //                      ElapsedTime: 10, PercentComplete: 10 });
  // }
}
