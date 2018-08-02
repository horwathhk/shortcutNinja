import { Injectable } from '@angular/core';
import { BehaviorSubject } from '../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
 private messageSource = new BehaviorSubject<any>('default message');
 currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(message: any) {
    this.messageSource.next(message);
  }
}
