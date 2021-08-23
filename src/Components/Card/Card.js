import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import Suit from "../../assets/images/spade.png"
import "./Card.scss";
import { cardState } from "../../logic/Helper/Helper";

const Card = ({ card , isDown }) => {
  const [down, setdown] = useState("");
  
  useEffect(() => {
    setdown(cardState(card));
  }, [isDown,card]);
  
  return (
    <div data-test="card-wrapper" className={"card__wrapper"  + down }>
      <div data-test="card-content-left" className="card__content card__rank-left">{ card.rank }</div>
      <div data-test="card-suit" className="card__content card__suit"><img src={Suit} width="70px" height="70px" draggable="false" /></div>
      <div data-test="card-content-right" className="card__content card__rank-right">{ card.rank }</div>
    </div>
  );
}

Card.propTypes = {
  card:PropTypes.object.isRequired,
  isDown:PropTypes.bool.isRequired
}

export default Card;