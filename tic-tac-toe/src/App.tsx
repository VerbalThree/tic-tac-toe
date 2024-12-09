import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Squares({value, onSquareClick}){
  return(
    <button className='square' onClick={onSquareClick}>{value}</button>
  );
}

function Board({xIsNext, squares, onPlay}){
  
  function handleClick(i){
    if(calculateWinner(squares) || squares[i]){
      return;
    }
    const nextSquares = squares.slice();
    if(xIsNext){
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if(winner){
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return(
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        <Squares value={squares[0]} onSquareClick={() => handleClick(0)}/>
        <Squares value={squares[1]} onSquareClick={() => handleClick(1)}/>
        <Squares value={squares[2]} onSquareClick={() => handleClick(2)}/>      
      </div>
      <div className='board-row'>
      <Squares value={squares[3]} onSquareClick={() => handleClick(3)}/>
      <Squares value={squares[4]} onSquareClick={() => handleClick(4)}/>
      <Squares value={squares[5]} onSquareClick={() => handleClick(5)}/>
      </div>
      <div className="board-row">
      <Squares value={squares[6]} onSquareClick={() => handleClick(6)}/>
      <Squares value={squares[7]} onSquareClick={() => handleClick(7)}/>
      <Squares value={squares[8]} onSquareClick={() => handleClick(8)}/>
      </div>
    </div>
  );
}

function calculateWinner(){
  const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ];
  for(let i=0;i<lines.length;i++){
    const [a,b,c] = lines[i];
    if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
      return squares[a];
    }
  }
  return null;
}