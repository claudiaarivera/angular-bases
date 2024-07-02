import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character';
import { v4 as uuid } from "uuid";

@Injectable({ providedIn: 'root' })
export class DbzService {
  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 300,
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 10000,
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 7500,
    },
  ];
  constructor() {}
  addCharacter(character: Character){
    console.log(character)
    this.characters.push({
      ...character,
      id: uuid()
    })
  }
  deleteCharacterById(id: string){
    //this.characters.splice(0, 1)
    console.log(id);
    this.characters = this.characters.filter((character) => character.id !== id);
    console.log(this.characters);
  }
}
