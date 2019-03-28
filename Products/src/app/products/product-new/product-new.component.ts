import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent implements OnInit {

  constructor(private _products: ProductServiceService) { }

  ngOnInit() {
  }
  update(){
    
  }

}
