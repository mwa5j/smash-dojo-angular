import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService: UserService) { }

  user: User = {
    email: null,
    password: null, 
  }

  ngOnInit() {
  }

  signUp(signUpUser: User){
    return this.userService.createAccount(signUpUser.email, signUpUser.password);
  }
}
