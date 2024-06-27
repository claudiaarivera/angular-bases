import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  public heroNames: string[] = ['Black Panter', 'Spiderman', 'Iroman', 'Hulk'];
  public deletedHero?: string;
  removeLast(){
    this.deletedHero = this.heroNames.pop();
  }
}
