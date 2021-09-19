import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  cartTotal$: Observable<number>;

  constructor(private store: Store<{ cartTotal: number }>) { 
    this.cartTotal$ = this.store.select('cartTotal');
  }

  ngOnInit(): void {}

}
