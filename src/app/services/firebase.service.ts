import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/compat/auth';
import { getAuth, sendSignInLinkToEmail } from "firebase/auth";
import { environment } from 'src/environments/environment';
import { getDatabase,onValue,set,ref, Database } from "firebase/database";
import { initializeApp } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
   actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be in the authorized domains list in the Firebase Console.
    url: 'https://google.com',
    // This must be true.
    handleCodeInApp: true,
  };
  constructor(public firebaseAuth: AngularFireAuth) {}
  async signIn(email:string,password:string){
    let loginSuccess=0;
    await this.firebaseAuth.signInWithEmailAndPassword(email,password).then(userCredential=>{
      loginSuccess=1;
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("ERR")
    })
    return loginSuccess
  }
  signUp(email:string,password:string){
    return this.firebaseAuth.createUserWithEmailAndPassword(email,password);
  }
  sendVerificationMail() {
    return this.firebaseAuth.currentUser
      .then((user) => {
        return user.sendEmailVerification();
      })
  }
  logout(){
    this.firebaseAuth.signOut()
  }
  writeUserData(userId,name,email){
    console.log("Data writing...")
    const db = getDatabase();
    set(ref(db, 'users/' + userId), {
      username: name,
      email: email,
    });
  }
  async getProductsInfo(){
    let products=[];
     console.log("Getting products...")
     const db = getDatabase();
      onValue(ref(db,'products'), (snapshot)=>{
       const data=snapshot.val();
       products=data;
     })
  }
}
