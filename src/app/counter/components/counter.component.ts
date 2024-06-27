import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  public initialValue: number = 10;
  public counter: number = this.initialValue;
  increse(): void {
    this.counter += 1;
  }
  decrese(): void {
    if (this.counter === 1) return;
    this.counter -= 1;
  }
  reset(){
    this.counter = this.initialValue
  }
}