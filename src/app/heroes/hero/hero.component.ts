import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  public name: string = 'Iroman';
  public age: number = 45;
  get capitalizeName() {
    return this.name.toUpperCase();
  }
  getHeroDescription() {
    return `${this.name} - ${this.age}`;
  }
  changeHero(): void {
    this.name = 'Spiderman';
  }
  changeAge(): void {
    this.age = 34;
  }
  reset() {
    this.name = 'Iroman';
    this.age = 45;
  }
}
