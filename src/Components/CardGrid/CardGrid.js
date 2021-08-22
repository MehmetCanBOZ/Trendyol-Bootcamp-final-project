import React from "react";
import "./CardGrid.scss";
import Card from "../Card/Card";
import {
  dragStart,
  drag,
  dragEnter,
  dragEnd,
}from "../../logic/DragandDrop/DragandDrop";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

const CardGrid = ({ deck , index, game ,setGame }) => {
  return (
    <div data-test = "card-wrapper" deck={deck} className = "" 
      onDragEnter = {(e) => { dragEnter(game, setGame, deck); }}
      onDragEnd = {(e) => { dragEnd(game, setGame); }}
      id = {index}
     >
      <ReactCSSTransitionGroup
        transitionName="card"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
        key={index + " 3"}
        deck={deck}
      >
      {
        deck?.map((card, key) => (
          <div
            key = {card.rank + " " + card.deck + " 0"}
            id = {card.rank + " " + card.deck}
            className = "card"
            draggable = {true}
            onDragStart = {(e) => {dragStart(e, card, deck, game, setGame);}}
            onDrag={(e) => { drag(e, game); }}
            data-test="card-container"
          >
          <Card
            key={card.rank + " " + card.deck}
            card={card}
          />
          </div>
        ))
      }
      </ReactCSSTransitionGroup>
    </div>
  );
}

export default CardGrid;