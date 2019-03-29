import { Injectable } from '@angular/core';
import { Product } from './product';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  products: Array<Product> = 
  [
    new Product("Baretta", "A classic 9 mm",400.00,355),
    new Product("Glock", "For gentlemen of culture and taste",550.00,220),
    new Product("AR-15", "The choice of incels",1500.00,850),
    new Product("AK 47", "For wodka swilling commies",20.00,9000)
  ]

  addProduct(product)
  {
    this.products.push(product);
  }
  retreveAll(){
    return this.products;
  }

  constructor(private _http: Http) 
  {
    //console.log(_http)
  }

}
