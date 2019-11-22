import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy-one',
  template: `
    <p>lazy-one works!</p>
    <app-shared-component></app-shared-component>
  `,
})
export class LazyOneComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
