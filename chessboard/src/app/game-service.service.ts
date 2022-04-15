import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Coord } from './board/coord';

@Injectable({
  providedIn: 'root'
})
export class GameServiceService {

  constructor() {
    this.knightPosition$.subscribe(kp => {
    this.currentPosition = kp;
  })
  }

  knightPosition$ = new BehaviorSubject<Coord>({x:2, y:5});
  currentPosition: Coord;
 
  moveKnight(to: Coord) {
    this.knightPosition$.next(to);  
  }

  isLegalMove(to: Coord) {
    const {x, y} = this.currentPosition;
    const xchange = to.x - x;
    const ychange = to.y - y;

    return  (Math.abs(xchange) === 2 && Math.abs(ychange) === 1) ||
            (Math.abs(xchange) === 1 && Math.abs(ychange) === 2);
  }

  arePossibleMoves(currentPosition: Coord) {

      const {x, y} = this.currentPosition;
      

      for (let i = 0; i < 63; i++) {
        let Mx = i % 8 - x;
        let My = Math.floor(i / 8) - y;

      }

      
  }

}
