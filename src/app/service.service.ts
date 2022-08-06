import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  propertyList = [{
    name: 'xyz',
    description: 'abcdds',
    size: '12'
  }]
  refreshgridSubject = new BehaviorSubject({});
  constructor() { }

  public getPropertyList() {
    return this.propertyList;

  }
  public addProperty(data: any) {
    this.propertyList.push(data);
  }
}
