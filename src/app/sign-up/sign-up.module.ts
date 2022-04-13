import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
const routes: Routes = [
  {
    path: '',
    component: SignUpComponent
  },
];
@NgModule({
  declarations: [SignUpComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class SignUpModule { }
