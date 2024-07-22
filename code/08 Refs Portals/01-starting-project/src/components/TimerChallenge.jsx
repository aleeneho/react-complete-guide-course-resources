import React, { useState } from 'react';

export default function TimerChallenge({ title, targetTime }) {
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  function handleStart () {
    setTimeOut(() => {
      setTimerExpired(true);
    }, targetTime * 1000);

    setTimerStarted(true);
  }

  function handleStop() {
    
  }

  return (
  <section className='challenge'>
    <h2>{title}</h2>
    {timerExpired && <p>You Lost!</p>}
    <p className='challenge-time'>
      {targetTime} seconds {targetTime === 1 ? 's' : ''} allowed to complete this challenge.
    </p>
    <p>
      <button>
        {timerStarted ? 'Stop' : 'Start'} Challenge
      </button>
    </p>
    <p className={timerStarted ? 'active' : undefined}>
      {timerStarted ? "Time is running" : "Timer inactive" }
    </p>
  </section>
  );
}
