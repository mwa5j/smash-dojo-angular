import { Component, OnInit } from '@angular/core';
import { Set } from '../../models/set.model'
import { SetService } from '../../services/set.service'
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {
  constructor(private setService: SetService, private userService: UserService) { }
  userEmail: string = null; 
  currentDate: Date =  new Date();

  set: Set = {
    userChar: null,
    oppChar: null,
    wins: 0, 
    losses: 0, 
    type: null,
    userID: this.userService.userDetails(),
    date: this.currentDate.getDate(),
    month: this.currentDate.getMonth(),
  }

  ngOnInit(){
    this.userEmail = this.userService.userDetails();
  }

  formatImage(name){
    return "../../assets/smash-icons/" + name.replace(/[^A-Z0-9]/ig, "") + ".png";
  }

  create(newSet: Set){
    this.setService.addSet(newSet);
  }

  onSubmit(setData: Set){
    // console.log("Creating: ", setData)
    this.create(setData);
    alert("Your set was recorded");
  }
  
  characters: string[] = [
    "Bayonetta"
    ,"Bowser"
    ,"Bowser Jr."
    ,"Captain Falcon"
    ,"Chrom"
    ,"Cloud"
    ,"Corrin"
    ,"Daisy"
    ,"Dark Pit" 
    ,"Dark Samus" 
    ,"Diddy Kong"
    ,"Donkey Kong"
    ,"Dr. Mario"
    ,"Duck Hunt"
    ,"Falco"
    ,"Fox"
    ,"Ganondorf"
    ,"Greninja"
    ,"Ice Climbers"
    ,"Ike"
    ,"Incineroar"
    ,"Inkling"
    ,"Isabelle"
    ,"Jigglypuff"
    ,"Ken"
    ,"King Dedede"
    ,"King K. Rool"
    ,"Kirby"
    ,"Link"
    ,"Little Mac"
    ,"Lucario"
    ,"Lucas"
    ,"Lucina"
    ,"Luigi"
    ,"Mario"
    ,"Marth"
    ,"Mega Man"
    ,"Meta Knight"
    ,"Mewtwo"
    ,"Mr. Game and Watch"
    ,"Ness"
    ,"Olimar"
    ,"Pac Man"
    ,"Palutena"
    ,"Peach"
    ,"Pichu"
    ,"Pikachu"
    ,"Piranha Plant"
    ,"Pit"
    ,"Pokemon Trainer" 
    ,"R.O.B."
    ,"Robin"
    ,"Rosalina"
    ,"Roy"
    ,"Richter"
    ,"Ridley"
    ,"Ryu"
    ,"Samus"
    ,"Sheik"
    ,"Shulk"
    ,"Simon"
    ,"Snake"
    ,"Sonic"
    ,"Toon Link"
    ,"Villager"
    ,"Wario"
    ,"Wii Fit Trainer"
    ,"Wolf"
    ,"Yoshi"
    ,"Young Link"
    ,"Zelda"
    ,"Zero Suit Samus"
  ]
}
