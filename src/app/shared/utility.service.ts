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

  getCurrentInstance(id: number): CurrentInstanceModel {
    const retVal = this.currentList.find(i => i.instanceId === id);
    return retVal;
  }
}
