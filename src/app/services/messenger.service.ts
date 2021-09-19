import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  public cartItemList : any = []
  public productList = new BehaviorSubject<any>([]);

  subject = new Subject()

  constructor() { }
  sendMessage(product){

    this.subject.next(product)
  }

  getMessage(){
    return this.subject.asObservable()
  }
}
