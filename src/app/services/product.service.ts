import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import data from '../../assets/data/products.json';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products;

  constructor() {
    this.products = data;

   }

  getProducts(): Product[]{
    //popoulate prodcuts from json file and return observable
    return this.products;
  }

}
