import { GameServiceService } from '../game-service.service';
import { Component, OnInit } from '@angular/core';
import { Coord } from './coord';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  
  squares = new Array(64).fill(0).map((_, i) => i);
  knightPosition$ = this.game.knightPosition$;

  constructor(public game: GameServiceService) {}

  ngOnInit() {
      
  }

  xy(square: any): Coord {
      return {
        x: square % 8,
        y: Math.floor(square / 8)
      } 
  }


  isBlack({ x, y }: Coord) {
    return(x + y) % 2 === 1;
  }

  getBoardClicK(pos: Coord) {
      if (this.game.isLegalMove(pos)) {
          this.game.moveKnight(pos);
      }
      else {
        alert("Illegal Knight Move, Retry")
      }
  }

}
