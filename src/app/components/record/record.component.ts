import { Component, OnInit } from '@angular/core';
import { Set } from '../../models/set.model'

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {
  set: Set = {
    userChar: null,
    oppChar: null,
    wins: 0, 
    losses: 0, 
    type: null,
    userID: null,
  }

  formatImage(name){
    return "../../assets/smash-icons/" + name.replace(/[^A-Z0-9]/ig, "") + ".png"
  }

  onSubmit(newSet: Set): void{
    console.log(newSet)
  }
  
  constructor() { }

  ngOnInit() {
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
