import React, { useState, useEffect } from "react";

// make a function for each square and receive each value and onClick
function Square({ value, onClick }) {
  return (
    <button
      onClick={onClick}
      className="float-left mr-[-1px] mt-[-1px] h-[100px] w-[100px] cursor-pointer border-2 border-red-400 p-0 text-center text-[40px] hover:bg-slate-100"
    >
      {value}
    </button>
  );
}

export default function TicTacToe() {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [isXTurn, setIsXTrue] = useState(true); //check if X or O turn
  const [status, setStatus] = useState("");

  function getWinner(squares) {
    const winningPatterns = [
      // 0 1 2
      // 3 4 5
      // 6 7 8
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
    ];

    for (let i = 0; i < winningPatterns.length; i++) {
      const [x, y, z] = winningPatterns[i];
      // find whether all the pattern is correct X or O
      if (
        squares[x] &&
        squares[x] === squares[y] &&
        squares[x] === squares[z]
      ) {
        return squares[x];
      }
    }
    return null;
  }

  function handleClick(getCurrentSquare) {
    let cpySquares = [...squares];
    if (getWinner(cpySquares) || cpySquares[getCurrentSquare]) return; //if the current cpySquare is exists in the array mean true, it will return nothing to avoid the changes
    cpySquares[getCurrentSquare] = isXTurn ? "X" : "O";
    setIsXTrue(!isXTurn); //change X or O
    setSquares(cpySquares); //Update the square
    console.log(cpySquares);
  }

  function handleRestart() {
    setIsXTrue(true);
    setSquares(Array(9).fill(""));
  }

  useEffect(() => {
    if (!getWinner(squares) && squares.every((item) => item !== "")) {
      setStatus(`This is a draw ! Please restart the game`);
    } else if (getWinner(squares)) {
      setStatus(`Winner is ${getWinner(squares)}. Please restart the game`);
    } else {
      setStatus(`Next player is ${isXTurn ? "X" : "O"}`);
    }
  }, [squares, isXTurn]);

  return (
    <div className="flex min-h-[100px] items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Tic Tac Toe</h1>
        <div className="tic-tac-toe-container mt-5 table items-center content-none after:clear-both">
          <div className="row">
            <Square value={squares[0]} onClick={() => handleClick(0)} />
            <Square value={squares[1]} onClick={() => handleClick(1)} />
            <Square value={squares[2]} onClick={() => handleClick(2)} />
          </div>
          <div className="row">
            <Square value={squares[3]} onClick={() => handleClick(3)} />
            <Square value={squares[4]} onClick={() => handleClick(4)} />
            <Square value={squares[5]} onClick={() => handleClick(5)} />
          </div>
          <div className="row">
            <Square value={squares[6]} onClick={() => handleClick(6)} />
            <Square value={squares[7]} onClick={() => handleClick(7)} />
            <Square value={squares[8]} onClick={() => handleClick(8)} />
          </div>
        </div>
        <h1 className="mt-5 text-xl font-bold">{status}</h1>
        <button
          className="m-4 rounded-md bg-green-400 p-2 px-4 font-bold text-white"
          onClick={handleRestart}
        >
          Restart
        </button>
      </div>
    </div>
  );
}
