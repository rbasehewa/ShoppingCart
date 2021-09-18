import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItems: any = [];

  cartTotal = 0;

  itemTotal = 0;
 

  constructor(private msg: MessengerService) { }

  ngOnInit(): void {

    this.msg.getMessage().subscribe((product : any) => {
      // console.log(product);
      this.addProductToCart(product)
    })
  }

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

    this.cartTotal = 0
    this.itemTotal = 0
    this.cartItems.forEach(item  => { this.cartTotal += (item.qty * item.price)})

    this.cartItems.forEach(item  => { this.itemTotal += (item.qty )})


   }
}
