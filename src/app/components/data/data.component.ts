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
    console.log("Retrieving sets for: ", this.userService.userDetails())
    this.sets = this.setService.readSetList(this.userService.userDetails())
  }

  formatImage(name){
    return "../../assets/smash-icons/" + name.replace(/[^A-Z0-9]/ig, "") + ".png";
  }

  updateSet(key: string){
    alert("Updated")
  }

  deleteSet(key: string){
    this.setService.deleteSet(key);
    this.sets = this.setService.readSetList(this.userService.userDetails())
  }
}
