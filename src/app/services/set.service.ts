import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from  '@angular/fire/database';
import { Set } from '../models/set.model';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class SetService {
    setsRef: AngularFireList<any>;
    sets: Set[] = [];

    constructor(db: AngularFireDatabase, private userService: UserService){
      this.setsRef = db.list('sets')
      this.setsRef.valueChanges().subscribe(res => {
        for(var i = 0; i < res.length; i++){
          var tempSet: Set = {
            userChar: res[i].userChar,
            oppChar: res[i].oppChar,
            wins: res[i].wins, 
            losses: res[i].losses, 
            type: res[i].type,
            userID: this.userService.getUserDetails(),
          }
          this.sets.push(tempSet)
        }
      })
      
    }

    addSet(newSet: Set){
      this.setsRef.push(newSet);
    }

    getSets(){
      console.log(this.sets);
      return this.sets;
    }
  
}
