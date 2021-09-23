import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BehaviorSubject, Observable } from 'rxjs';
// injectable - DI
@Injectable({
  providedIn: 'root' // though entire application
})
export class MessengerService {

  public cartItemList : any = []
  public productList = new BehaviorSubject<any>([]);

  subject = new Subject()

  constructor() { }

/**
 * This is send message and call by product item -> Observarble
 */
  sendMessage(product){
    this.subject.next(product) // trigerring event (one product)
    
  }
/**
 * This is get message all by inside the cart component -> sender (trigger)
 */
  getMessage(){
    return this.subject.asObservable()
  }
}
