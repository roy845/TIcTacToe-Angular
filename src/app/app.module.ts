import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SquareComponent } from './square/square.component';
import { TicTacToeComponentComponent } from './tic-tac-toe-component/tic-tac-toe-component.component';



@NgModule({
  declarations: [
    AppComponent,
    SquareComponent,
    TicTacToeComponentComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
