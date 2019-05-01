import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth'
import { User } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User;

  constructor(public afAuth: AngularFireAuth, private router: Router){
    this.afAuth.authState.subscribe(user => {
      if(user){
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null);
      }
    })
  }

  async signIn(email: string, password: string){
    try{
      await this.afAuth.auth.signInWithEmailAndPassword(email, password);
      this.router.navigate(['record']);
    } catch (e) {
      alert(e.message);
    }
  }

  async signOut(){
    await this.afAuth.auth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['']);
  }

  isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user != null;
  }

  userDetails(): string {
    var user = JSON.parse(localStorage.getItem('user'));
    return user.email;
  }
}
