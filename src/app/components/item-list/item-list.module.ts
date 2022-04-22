import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ItemModule } from '../item/item.module';
import { ItemListComponent } from './item-list.component';
import { ItemComponent } from '../item/item.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [ItemListComponent,ItemComponent],
  imports: [
    CommonModule, FormsModule, IonicModule,RouterModule
  ],
  exports:[ItemListComponent]
})
export class ItemListModule { }
