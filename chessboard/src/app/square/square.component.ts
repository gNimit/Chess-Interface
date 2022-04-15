import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <div [ngStyle]="getStyle()" [ngStyle]="isPossibleMove()">
      <ng-content> </ng-content>
    </div>
  `,
  styles: [ `
      :host, div {
        display: block;
        height: 100%;
        width: 100%;
        text-align: center;
      }
  `]
})
export class SquareComponent {

  @Input() black: boolean;

  @Input() possibleMove: boolean;

  getStyle() {
    return this.black
    ? { backgroundColor: '#87CEEB', color: 'black' }
    : { backgroundColor: 'white', color: 'black' }
  }

  isPossibleMove() {
    if(this.possibleMove) {
      return {backgroundColor: '#FFFF66'}
    }
    else {
      return this.getStyle();
    }
  }
}
