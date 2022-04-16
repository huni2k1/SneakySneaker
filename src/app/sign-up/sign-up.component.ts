import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  private email: string=''
  private password: string=''
  constructor(private authService: FirebaseService,private router: Router) {
   }
   handleSignUp(){
    this.authService.signUp(this.email, this.password)
    .then((res) => {
      // Do something here
      this.authService.sendVerificationMail()
      this.router.navigate(['login-page']);
    }).catch((error) => {
      window.alert(error.message)
    })
   }
  ngOnInit() {}

}
