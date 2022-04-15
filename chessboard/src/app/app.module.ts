import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SquareComponent } from './square/square.component';
import { BoardComponent } from './board/board.component';
import { KnightComponent } from './knight/knight.component';
import { GameServiceService } from './game-service.service';


@NgModule({
  declarations: [
    AppComponent,
    SquareComponent,
    BoardComponent,
    KnightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [GameServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
