import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ItemComponent } from './item.component';
import { LabelComponent } from '../label/label.component';
@NgModule({
  declarations: [ItemComponent,LabelComponent],
  imports: [CommonModule, FormsModule, IonicModule],
  exports: [ItemComponent]
})
export class ItemModule { }
