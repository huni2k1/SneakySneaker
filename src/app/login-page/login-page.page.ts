import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage implements OnInit {
  private email: string=''
  private password: string=''
  constructor(private router:Router,private firebase:FirebaseService, public alertController: AlertController) { }
  
  ngOnInit() {
  }
   
  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'alertBtn',
      header: 'Login Alert',
      message: 'Login Failed',
      buttons: ['OK']
    });    
    await alert.present();
  }
  handleLogin(){
  this.firebase.signIn(this.email,this.password).then((status)=>{
    if(status){
      this.router.navigate(["tabs"])
    }
    else{
      this.presentAlert()
    }
  })}


}
