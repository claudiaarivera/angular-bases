import { NgModule } from "@angular/core";
import { ListComponent } from "./list/list.component";
import { HeroComponent } from "./hero/hero.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    ListComponent,
    HeroComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListComponent,
    HeroComponent
  ]
})
export class HeroesModule {

}