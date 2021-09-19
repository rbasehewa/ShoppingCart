import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  productsList: Product[] = []

  constructor(private productService: ProductService ) { }

  ngOnInit() {
    this.productsList = this.productService.getProducts()
   
  }

}
