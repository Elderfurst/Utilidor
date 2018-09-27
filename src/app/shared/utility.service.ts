import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { CurrentInstanceModel } from './current-instance.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  currentList: CurrentInstanceModel[];

  constructor(private http: Http) {
    this.currentList = [];
  }

  getCurrentInstances(): Observable<any> {
    return this.http.get(environment.utiladorApi + '/utility/running')
                    .pipe(map(res => res.json()));
  }

  getAllUtilities(): Observable<any> {
    return this.http.get(environment.utiladorApi + '/utility/GetAllUtilities')
                    .pipe(map(res => res.json()));
  }

  getInstances(utilityId: number): Observable<any> {
    return this.http.get(environment.utiladorApi + `/{utilityId}/instances`)
                    .pipe(map(res => res.json()));
  }

  getLogs(instanceId: number): Observable<any> {
    return this.http.get(environment.utiladorApi + `/logs/{instanceId}`)
                    .pipe(map(res => res.json()));
  }
}
