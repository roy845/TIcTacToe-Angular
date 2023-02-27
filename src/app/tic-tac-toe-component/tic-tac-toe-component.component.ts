import { Component } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe-component',
  templateUrl: './tic-tac-toe-component.component.html',
  styleUrls: ['./tic-tac-toe-component.component.css']
})
export class TicTacToeComponentComponent {
  player:string = 'X';
  cells: string[] = new Array(9).fill('');
  winner:string = '';
  message:string = '';

  selectCell(index:number){
    if(!this.cells[index])
      this.cells[index] = this.player
    
      if(this.checkWinner())
        this.message = `Winner: ${this.winner} wins!`
      else if(this.checkTie())
        this.message = "It's a tie!"
      else
        this.player = this.player == 'X' ? 'O' : 'X'
  }

  checkWinner():boolean{
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]

    for(let i = 0;i<lines.length;i++){
      const[a,b,c] = lines[i]

      if(this.cells[a] && this.cells[a] == this.cells[b] && this.cells[a] == this.cells[c]){
        this.winner = this.cells[a]
        return true
      } 
    }
    return false;
  }

  checkTie():boolean{
    return this.cells.every(cell=>cell!=='')
  }

  resetGame():void{
    this.player = 'X'
    this.cells = new Array(9).fill('')
    this.winner = ''
    this.message = ''
  }
}
