import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from  '@angular/fire/database';
import { Set } from '../models/set.model';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class SetService {
  database;
  setsRef: AngularFireList<any>;
  sets: Set[] = [];
  user_sets: Set[] = [];

  constructor(db: AngularFireDatabase, private userService: UserService){
    this.setsRef = db.list('sets');
    this.database = db;
  }

  updateSet(key: string, updatedFields: Object){
    this.setsRef.update(key, updatedFields)
    .then(() => {
      console.log("Added key field to: ", key)
    }).catch(err => {
      console.log("Error: ", err.message)
    })
  }

  deleteSet(key: string){
    this.setsRef.remove(key)
    .then(() => {
      console.log("Deleted: ", key)
    })
    .catch(err => {
      console.log("Error: ", err.message)
    })
  }

  createSet(newSet: Set){
    this.setsRef.push(newSet)
    .then((snap) => {
      console.log(snap.key)
      this.updateSet(snap.key, {key: snap.key});
    })
  }

  readSetList(username: string){
    var userSets: Set[] = [];

    this.setsRef.valueChanges().subscribe(res => {
      console.log("Database raw: ", res)
      for(var i = 0; i < res.length; i++){
        if(username == res[i].userID){
        var tempSet: Set = {
          userChar: res[i].userChar,
          oppChar: res[i].oppChar,
          wins: res[i].wins, 
          losses: res[i].losses, 
          type: res[i].type,
          userID: res[i].userID,
          date: res[i].date,
          month: res[i].month,
          key: res[i].key,
        }
        console.log("Database retrieval: ", tempSet)
        userSets.push(tempSet)
        }
      }
    })
    return userSets;

  }
  
}
