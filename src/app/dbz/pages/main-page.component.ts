import { Component, OnInit } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character';
@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main.page.component.html',
})
export class MainPageComponent implements OnInit {
  // public characters: Character[] = [];
  constructor(
    public dbz: DbzService //inyeccion de dependencia
  ) {}
  ngOnInit(): void {
    //this.characters = this.dbz.characters;
  }
  get characters() {
    return [...this.dbz.characters];
  }
  onDeleteCharacter(id: string) {
    this.dbz.deleteCharacterById(id);
  }
  onNewCharacter(character: Character) {
    this.dbz.addCharacter(character);
  }
}
