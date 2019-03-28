import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
//importing product lcass to create new object and send to service
import { Product } from '../product';
import { NgForOf } from '@angular/common';
@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent implements OnInit {
  product = new Product("","",0,0);

  constructor(private _products: ProductServiceService) { }

  ngOnInit() {
  }
  
  addProduct(product)
  {
    console.log(product);
  }

}
