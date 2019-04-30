import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: Observable<firebase.User>;
  private userDetails: string = null;

  constructor(private _firebaseAuth: AngularFireAuth, private router: Router) {
    this.user = _firebaseAuth.authState;
  
    this.user.subscribe(
      (user) => {
        if(user) {
          this.userDetails = user.email;
          console.log(this.userDetails);
        }
        else{
          this.userDetails = null;
          console.log("No one is home")
        }
      }  
    );
  }

  signInWithEmail(email, password){
    this._firebaseAuth.auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      this.router.navigate(['/record']);
    })
  }

  createAccountWithEmail(email, password){
    this._firebaseAuth.auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
      this.router.navigate(['/record']);
    })
  }

  isLoggedIn(){
    if(this.userDetails == null){
      return false;
    } else {
      return true;
    }
  }

  signOut() {
    console.log("Bye")
    this._firebaseAuth.auth.signOut()
    .then(() => this.router.navigate(['/']))
  }

  getUserDetails(){
    return this.userDetails;
  }
}
