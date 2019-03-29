import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
//importing product lcass to create new object and send to service
import { Product } from '../product';

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
  
  addProduct(formData)
  {
    /*
    this is the ojbect path to the form data,
    probably a better way of doing it
    console.log(formData.form.value.name);
    */
   this.product.name = formData.form.value.name;
   this.product.description = formData.form.value.description;
   this.product.price = formData.form.value.price;
   this.product.quantity = formData.form.value.quantity;
   this.product.date_created = new Date;
   this.product.date_updated = new Date;
   this._products.addProduct(this.product);
   //this.product = new Product("","",0,0);


   console.log(this.product);
   
   
    
  }

}
