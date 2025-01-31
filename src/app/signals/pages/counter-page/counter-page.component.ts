import { Component, computed, signal } from '@angular/core';
import { single } from 'rxjs';

// const name = signal('Andy');

// name.set("Maria")

@Component({
  templateUrl: './counter-page.component.html',
  styleUrls: ['./counter-page.component.css'],
})
export class CounterPageComponent {
  public counter = signal(10);

  //Este es solo lectura
  public squareCounter = computed(() => this.counter() * this.counter());

  constructor() {
    // console.log(name());
  }

  increaseBy(value: number) {
    // this.counter.set(this.counter() + value);

    this.counter.update((current) => current + value);
  }
}
