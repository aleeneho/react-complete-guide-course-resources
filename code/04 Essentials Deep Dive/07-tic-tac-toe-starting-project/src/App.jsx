import React from 'react'

import Player from './Components/Player.jsx'
import GameBoard from './Components/GameBoard.jsx'
import Log from './Components/Log.jsx'
import { WINNING_COMBINATIONS } from './Components/winning-combination.js'

const initailGameBoard = [

  [null, null, null],
  [null, null, null],
  [null, null, null],

];

function deriveActivePlayer(gameTurns) {
  let currentPlayer = 'X';

  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'Y';
  }
  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = React.useState([]); // [ {player: 'X', rowIndex: 0, colIndex: 1}, {player: 'Y', rowIndex: 1, colIndex: 2}
  // const [activePlayer, setActivePlayer] = React.useState('X');
  // const [hasWinner, setHasWinner] = React.useState(false);

  const activePlayer = deriveActivePlayer(gameTurns);

  let gameBoard = initailGameBoard;

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }



  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol
    const secondSquareSymbol
    const thirdSquareSymbol
  }

  function handleSelectSquare(rowIndex, colIndex) {
    // setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'Y' : 'X');
    setGameTurns(prevTurns => {
      // let currentPlayer = 'X';

      // if (prevTurns.length > 0 && prevTurns[0].player === 'X') {
      //   currentPlayer = 'Y';
      // }

      const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [
        { square: {row: rowIndex, col: colIndex}, player: currentPlayer }, ...prevTurns
      ];
      return updatedTurns;
    });
  }

  return <main>
    <div id='game-container'>
      <ol id='players' className='highlight-player'>
        <Player initialName='Player 1' symbol='X' isActive={activePlayer === 'X'}/>
        <Player initialName='Player 2' symbol='Y' isActive={activePlayer === 'Y'}/>
      </ol>
      <GameBoard
      onSelectSquare={handleSelectSquare}
      board={gameBroad}
      />
    </div>
    <Log turns={gameTurns} />
  </main>
}

export default App
