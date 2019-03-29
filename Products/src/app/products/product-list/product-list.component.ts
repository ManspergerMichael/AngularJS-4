import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Array<any>;

  constructor(private _products: ProductServiceService) 
  {
    this.products = _products.products;
  }

  ngOnInit() {
    //console.log(this.products);
    this.retreveProducts();
  }

  retreveProducts()
  {
    this.products = this._products.retreveAll();
  }

}
