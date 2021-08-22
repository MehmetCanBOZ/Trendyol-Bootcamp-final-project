import React, {useState, useEffect} from "react";
import useGameHooks from "../../Hooks/useGameHooks";
import './Timer.scss'
const Timer = () => {
  const { time } = useGameHooks();
  
  return (
    <div data-test="timer-wrapper" className="timers">
      <div data-test="display-wrapper" id="display">
        <span data-test="display-hour">{("0" + Math.floor((time / 3600) % 60)).slice(-2)}:</span>
        <span data-test="display-minute">{("0" + Math.floor((time / 60) % 60)).slice(-2)}:</span>
        <span data-test="display-second">{("0" + Math.floor((time) % 60)).slice(-2)}</span>
      </div>
    </div>
  );
};

export default Timer;