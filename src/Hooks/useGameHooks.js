import { useEffect, useState } from "react";
import { gameStarter } from "../logic/GameStart/GameStart";

const useGameHooks = () =>{
  const [time, setTime] = useState(0);
  const [game, setGame] = useState({
    decks: [],
    x: 0,
    y: 0,
    selectedCard: "",
    draggableCards: [],
    fromDeck: "",
    targetDeck: "",
    hands: 0,
    remCardDeck:5,
    score:0,
    modalShow:false,
  });

  const setUpGame =  () =>{
    setGame((prev) => ({
      ...prev,
      decks: gameStarter()
    }));
  }
  
  let interval=null;

  const setUpTimer = () => {
    interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  }

  useEffect(() => {
    setUpTimer();
    setUpGame();
  }, [game.modalShow]);

  return {
   time, game, setGame , interval ,setTime
  }
}

export default useGameHooks;