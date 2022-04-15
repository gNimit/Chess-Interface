import { Component } from '@angular/core';

@Component({
  selector: 'app-knight',
  template: `
    <span>♘</span>
  `,
  styles: [
    `span {
      font-weight: 400;
      font-size: 54px;
    }`
  ]
})
export class KnightComponent {
  
  constructor() { }

}
