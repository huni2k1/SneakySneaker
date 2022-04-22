import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
  ]
})
export class ProductModule { }
