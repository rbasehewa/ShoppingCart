import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem: Product;
  
  constructor(private msg: MessengerService) { }

  ngOnInit(): void {
    // this.ProductService.getProducts();
  }

  handleAddToCart(){
    this.msg.sendMessage(this.productItem)
    //console.log(this.productItem);
  }

}
