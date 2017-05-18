import EventEmitter from 'events'
import Dispatcher from '../dispatcher'

class Board extends EventEmitter{
  constructor(){
    super()
    this.winner = false
    this.squares = ["","","","","","","","",""]
    this.winningCombos = [
      [0, 1, 2], 
      [3, 4, 5], 
      [6, 7, 8], 
      [0, 3, 6], 
      [1, 4, 7], 
      [2, 5, 8], 
      [0, 4, 8], 
      [2, 4, 6]
    ]
  }

  getSquares(){
    return this.squares
  }

  getWinner(){
    return this.winner
  }

  setSquare(index, player){
    if(this.squares[index] === ""){
      this.squares[index] = player
    }

    this.winner = this.gameIsWon()

    this.emit('changed')
  }

  resetBoard(){
    this.squares = ["","","","","","","","",""]
    this.winner = false
  }

  gameIsWon(){
    var winner = false
    this.winningCombos.forEach(function(combo){
      if(this.squares[combo[0]] === this.squares[combo[1]] && this.squares[combo[1]] === this.squares[combo[2]]){
        winner = this.squares[combo[0]]
      }
    }.bind(this))

    return winner
  }

  handleAction(action){
    console.log('Action recieved in Board', action)
  }
}

let board = new Board()
Dispatcher.register(board.handleAction.bind(board))
window.board = board
export default board
