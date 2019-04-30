import { Component, OnInit } from '@angular/core';
import { Set } from '../../models/set.model'
import { SetService } from '../../services/set.service'
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  constructor(private setService: SetService, private userService: UserService) { }

  sets: Set[] = []
    
  ngOnInit() {
    this.sets = this.setService.getSets();
  }

  checkUser(){
    return this.userService.getUserDetails();
  }

}
