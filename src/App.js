import React, { useState,useRef } from 'react';
import './App.css';

export default function App() {

  const [timeLeft,setTimeLeft] = useState(25 *60)
  let interval = useRef(null)

  function padZero(time) {
    return time.toString().padStart(2,'0');
  }

  function startTimer() {

    if(interval.current ==null) {
    interval.current = setInterval(()=> {
      setTimeLeft(timeLeft => {

        if(timeLeft>= 1)
        return timeLeft - 1;

        return 0;
      })
    },1000);

  }
  }

  function stopTimer() {

    clearInterval(interval.current);
    interval.current = null;
  }

  function resetTimer() {

    clearInterval(interval.current);
    setTimeLeft(25*60);
    interval.current = null;

  }
  let minutes = Math.floor(timeLeft / 60);
  let seconds = Math.floor(timeLeft - minutes*60);
  return (
    <div className="app">
      <h2>Pomodoro!</h2>

      <div className="timer">
      <span>{padZero(minutes)}</span>
        <span>:</span>
        <span>{padZero(seconds)}</span>
      </div>

      <div className="buttons">
        <button onClick = {startTimer}>Start</button>
        <button onClick ={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}
