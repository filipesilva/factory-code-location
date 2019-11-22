import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy-two',
  template: `
    <p>lazy-two works!</p>
    <app-shared-component></app-shared-component>
  `
})
export class LazyTwoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
