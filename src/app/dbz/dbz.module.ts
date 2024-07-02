import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { FormsModule } from "@angular/forms";
@NgModule({
  declarations: [
    MainPageComponent,
    AddCharacterComponent,
    CharacterListComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class DbzModule { }
