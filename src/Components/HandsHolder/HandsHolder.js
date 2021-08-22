import React from "react";
import "./HandsHolder.scss";

function HandsHolder({ game }) {
  return (
  <div data-test="card-holder" className="holder">
    {   
      <>
        {
          [...Array(8-game.hands)].map((elementInArray, index) =>
            <div data-test="card-holder-nohands" className="cardholder" key={index}></div>
          )
        }
        {
          [...Array(game.hands)].map((elementInArray, index) =>
            <div data-test="card-holder-hands" className="card__wrapper card__down" key={index}></div>
          )
        }
      </>
    }
  </div>
  )
}

export default HandsHolder;