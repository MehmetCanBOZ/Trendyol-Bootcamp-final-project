import React from "react";
import { distributeRemCards } from "../../logic/Helper/Helper";
import "./RemainingCards.scss";

function RemainingCards( {game, setGame} ) {
  return (
    <>
      <div data-test="rem-cards" className="rem-card" >
        { 
          [...Array(game.remCardDeck)].map((elementInArray, index) => 
            <div
              data-test="rem-cards-container"
              onClick={(e) => {
                distributeRemCards(game, setGame);
              }}
              className="card__wrapper card__down"
              key={index}
            ></div>
          ) 
        } 
      </div>
    </>
  );
}

export default RemainingCards;