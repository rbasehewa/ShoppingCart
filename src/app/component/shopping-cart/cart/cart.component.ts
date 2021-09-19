import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { addToCart } from 'src/app/cart.actions';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

/**
 * This is the cart component...
 */
export class CartComponent implements OnInit {

  cartItems: any = [];

  itemTotal = 0;
  cartTotal$: Observable<number>;

  constructor(private msg: MessengerService, private store: Store<{ cartTotal: number }>) { 

    this.cartTotal$ = store.select('cartTotal');

  }

  ngOnInit(): void {

    this.msg.getMessage().subscribe((product : any) => {
      // console.log(product);
      this.addProductToCart(product)
    })
  }

  /**
   * Add product to cart.
   * @param product 
   */
  addProductToCart(product: Product){

    let productExists = false;

    for(let i in this.cartItems){
      if(this.cartItems[i].productName === product.name){
        this.cartItems[i].qty++
        productExists = true
        break;
      }
    }


    if(!productExists){
      this.cartItems.push({
        productName : product.name,
        qty : 1,
        price : product.price
      })
    }

    this.itemTotal = 0

    this.store.dispatch(addToCart({amount: product.price}));

    this.cartItems.forEach(item  => { this.itemTotal += (item.qty )})


   }
}
