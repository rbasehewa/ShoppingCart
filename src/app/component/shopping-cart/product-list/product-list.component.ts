import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  // array of products which is blank array to start
  productsList: Product[] = []


  // dependency injection of product service
  constructor(private productService: ProductService ) { }

  /**
 * ngOnInit method will get fire when the html ready 
 */

  ngOnInit() {
    // we are loading all the products to the productlist variable
    console.log(this.productService.getProducts())
    this.productsList = this.productService.getProducts()

  }

}
