import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { CurrentInstance } from './models/current-instance.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Utility } from './models/utility.model';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  currentList: CurrentInstance[];

  constructor(private http: Http) {
    this.currentList = [];
  }

  getCurrentInstances(): Observable<any> {
    return this.http.get(environment.utiladorApi + '/utility/running')
                    .pipe(map(res => res.json()));
  }

  getAllUtilities(): Observable<Utility[]> {
    return this.http.get(environment.utiladorApi + '/utility')
                    .pipe(map(res => res.json()));
  }

  getInstances(utilityId: number, count: number = -1): Observable<any> {
    return this.http.get(environment.utiladorApi + `/utility/${utilityId}/instances?count=${count}`)
                    .pipe(map(res => res.json()));
  }

  getLogs(instanceId: number): Observable<any> {
    return this.http.get(environment.utiladorApi + `/utility/logs/${instanceId}`)
                    .pipe(map(res => res.json()));
  }
}
