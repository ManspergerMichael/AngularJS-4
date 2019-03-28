import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductNewComponent } from './products/product-new/product-new.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductServiceService } from './products/product-service.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductNewComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [ProductServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
