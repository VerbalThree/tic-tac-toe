import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Squares({value, onSquareClick}){
  return(
    <button className='square' onClick={onSquareClick}>{value}</button>
  );
}

