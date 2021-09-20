import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import data from '../../assets/data/products.json';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products;

  constructor() {

    // popolates products from local storage
    this.products = data;

   }

/**
 * This is the getProducts return products
 */

  getProducts(): Product[]{
    //return all the products
    return this.products;
  }

}
