import React from "react";
import { dragEnter } from "../../logic/DragandDrop/DragandDrop";
import CardHolder from "../../Components/CardHolder/CardHolder";
import RemainingCards from "../../Components/RemainingCards/RemainingCards";
import Modal from "../../Components/Modal/Modal";
import useGameHooks from "../../Hooks/useGameHooks";
import "./SpiderSolitaire.scss";
import Header from "../../Components/Header/Header";
import CardGrid from "../../Components/CardGrid/CardGrid";
import HandsHolder from "../../Components/HandsHolder/HandsHolder";

function SpiderSolitaire() {
  const {  game, setGame, time } = useGameHooks();

  return (
    <>
      {game?.modalShow ? <Modal setGame={setGame}/>:
        <>
          <Header game={game}/>
          <div data-test="rem-card-wrapper" className="game-top-container">
            <RemainingCards game={game} setGame={setGame}/>
            <HandsHolder game={game}/>
          </div>  

          <div data-test="main" className="main">
            { game?.decks?.slice(0, 10).map((deck, index) => (
              <>
                {deck?.length == 0 ? (
                  <div
                    data-test="holder"
                    id="holder"
                    key={index + "0"}
                    onDragEnter={(e) => {dragEnter(game, setGame, deck);}}
                  >
                  <CardHolder key={index + " 1"} deck={deck} />
                  </div>
                ) : (
                  <CardGrid game={game} setGame={setGame} key={index + " 2"} index={index} deck={deck} time = {time}/>
                )}
              </>
            ))}
          </div>
        </>
      }
    </>
  );
}

export default SpiderSolitaire;