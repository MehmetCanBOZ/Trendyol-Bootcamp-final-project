import React, { useState, useEffect } from "react";
import "./Header.scss";
import Timer from "../Timer/Timer";
import StopWatch from "../../assets/images/stopwatch.svg";
import Trophy from "../../assets/images/trophy.svg"

function Header( {game} ) {
  return (
    <div data-test="header-wrapper" className="header">
      <div data-test="score-wrapper" className="score">
        <img data-test="score-image" src={Trophy} alt="stopWatch" width="40px" height="40px"/>
        <h2>Highest Score Ever: <span data-test="score-info">{game?.score}</span></h2>
      </div>
      <div data-test="timer-wrapper" className="timer">
        <img data-test="timer-image" src={StopWatch} alt="stopWatch" width="40px" height="40px"/>
        <Timer/>
      </div>
    </div>
  );
}

export default Header;