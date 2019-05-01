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
    user_sets: Set[] = [];

    constructor(db: AngularFireDatabase, private userService: UserService){
      this.setsRef = db.list('sets');
    }

    addSet(newSet: Set){
      this.setsRef.push(newSet);
    }

    getSets(username: string){
      var userSets: Set[] = [];

      this.setsRef.valueChanges().subscribe(res => {
        for(var i = 0; i < res.length; i++){
            if(username == res[i].userID){
            var tempSet: Set = {
              userChar: res[i].userChar,
              oppChar: res[i].oppChar,
              wins: res[i].wins, 
              losses: res[i].losses, 
              type: res[i].type,
              userID: res[i].userID,
            }
            console.log("Database retrieval: ", tempSet)
            userSets.push(tempSet)
          }
        }
      })
      return userSets;

    }
  
}
