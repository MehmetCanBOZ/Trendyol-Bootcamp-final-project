import React from "react";
import { Link } from 'react-router-dom'
import GamplingGirl from "../../assets/images/gamblingGirl.png"
import "./Home.scss";

function Home() {
  return (
    <div data-test="home-app" className="home">
      <h1 data-test="home-header">Welcome Reversed Spider SpiderSolitaire</h1>
    <div data-test="home-image-wrapper" className="flex">
      <img data-test="home-image" src={GamplingGirl} alt="playingCards" width="300" height="300"/>
    </div>
    <div data-test="home-rules-wrapper" className="rules">
      <h2 data-test="home-rules-header">How To Play ?</h2>
      <ul>
        <li data-test="home-rule-1">To win a hand, the cards must always be arranged in the order A, 2, 3, 4, 5, 6, 7, 8 ,9 , 10, J, Q, K.</li>
        <li data-test="home-rule-2">When the game is deadlocked or when you need a card, click on the top left and after that 10 new cards are placed on the deck.</li>
        <li data-test="home-rule-3">Of the fifty-four cards laid out on the table at the beginning of the game, only the top cards are face-up.</li>
        <li data-test="home-rule-4">If the face of the face up card changes, the face of the previous card is revealed.</li>
        <li data-test="home-rule-5">To win the game, there must be 8 sets of hands at the end of the game.</li>
      </ul>
    </div>
    <Link to={"/game"}>
      <button data-test="home-game-button" className="startGame" >Start to  Game</button>
    </Link>
    </div>
  );
}

export default Home;
