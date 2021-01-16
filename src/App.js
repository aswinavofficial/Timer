import React, { useState,useRef } from 'react';
import './App.css';

export default function App() {

  const[totalMinutes,setTotalMinutes] = useState(25)
  const[totalSeconds,setTotalSeconds] = useState(0)
  const[timeLeft,setTimeLeft] = useState(totalMinutes * 60 + totalSeconds)
  const[timerRunning,setTimerRunning] = useState(false)
  let interval = useRef(null)

  function padZero(time) {
    return time.toString().padStart(2,'0');
  }

  function startTimer() {

    if(interval.current ==null) {

      setTimerRunning(true)
      setTimeLeft(totalMinutes * 60 + totalSeconds)
      interval.current = setInterval(()=> {
      setTimeLeft(timeLeft => {

        if(timeLeft>= 1)
        return timeLeft - 1;

        setTimerRunning(false)
        clearInterval(interval.current);
        setTimeLeft(totalMinutes * 60 + totalSeconds);
        return 0;
      })
    },1000);

  }
  }

  function stopTimer() {

    setTimerRunning(false)
    clearInterval(interval.current);
    interval.current = null;
  }

  function resetTimer() {

    setTimerRunning(false)
    clearInterval(interval.current);
    setTimeLeft(totalMinutes * 60 + totalSeconds);
    interval.current = null;

  }
  let minutes = Math.floor(timeLeft / 60);
  let seconds = Math.floor(timeLeft - minutes*60);
  return (
    <div className="app">
      <h2>Pomodoro!</h2>

      <div className="timer">
      <span contentEditable={!timerRunning} 
         suppressContentEditableWarning={true}
          onInput={(e)=> {
            setTotalMinutes(e.currentTarget.textContent)
          }}>
        {padZero(minutes)}
      </span>

      <span>:</span>
      
        <span contentEditable={!timerRunning} 
         suppressContentEditableWarning={true}
          onInput={(e)=> {
            setTotalSeconds(e.currentTarget.textContent)
          }}>
        {padZero(seconds)}
      </span>
      </div>

      <div className="buttons">
        <button 
          onClick = {startTimer}
          disabled={timerRunning}>
          Start
        </button>
        <button 
          onClick ={stopTimer}
          disabled={!timerRunning}>
          Stop
          </button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}
