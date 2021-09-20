import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  //this is input decorator as parent component which we can access our template
  @Input() productItem: Product;
  constructor(private msg: MessengerService) { }

  ngOnInit(): void {
    // this.ProductService.getProducts();
  }

  /**
 * This is handleAddtocart function executed trigger event when click add to cart 
 */

  handleAddToCart(){
    // send the message with the current product item inside the product item component
     this.msg.sendMessage(this.productItem)
  }

}
