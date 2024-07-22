import React, { useState } from 'react';

export default function TimerChallenge({ title, targetTime }) {
  const [timerexpired, setTimerExpired] = useState(false);

  function handleStart () {
    setTimeOut(() => {
      setTimerExpired(true);
    }, targetTime * 1000);
  }

  return (
  <section className='challenge'>
    <h2>{title}</h2>
    <p className='challenge-time'>
      {targetTime} seconds {targetTime === 1 ? 's' : ''} allowed to complete this challenge.
    </p>
    <p>
      <button>
        Start Challenge
      </button>
    </p>
    <p className=''>
      Time is running.../ Timer inactive
    </p>
  </section>
  );
}
