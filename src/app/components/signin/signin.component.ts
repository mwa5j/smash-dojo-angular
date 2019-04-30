import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private userService: UserService) {}

  user: User = {
    email: null,
    password: null, 
  }

  ngOnInit() {
  }

  signIn(signInUser: User){
    return this.userService.signInWithEmail(signInUser.email, signInUser.password);
  }


}
