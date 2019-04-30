import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Set } from '../models/set.model';

@Injectable({
  providedIn: 'root'
})
export class SetService {

  constructor(private firestore: AngularFirestore) { }

  getSets(){
    return this.firestore.collection('sets').snapshotChanges();
  }

  createSet(set: Set){
    return this.firestore.collection('sets').add(set);
  }

  deleteSet(setId: string){
    this.firestore.doc('sets/' + setId).delete();
  }
}
