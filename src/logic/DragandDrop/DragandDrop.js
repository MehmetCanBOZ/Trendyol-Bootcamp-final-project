import { isCardsMovabletoDeck, resetGameState, setSelectedCardstoDeck, selectCard, checkHandCompleted } from "../Helper/Helper"
import CardFlipSound from "../../assets/sound/card_flip.mp3"
import Error from "../../assets/sound/error.mp3";

var flip = new Audio(CardFlipSound);
var errorSound = new Audio(Error);

export const dragStart = (event, card, deck, game, setgame) => {
  const x = event.pageX;
  const y = event.pageY;
  
  event.dataTransfer.setData("text", event.target.id);
  event.dataTransfer.setDragImage(new Image("0", "0"),-5, -5);
  
  setgame((prevState) => ({
    ...prevState,
    x: x,
    y: y,
  }));
    
  resetGameState(setgame);
  selectCard(card, deck, setgame);
};

export const drag = (event, game) => {
  var movex = event.pageX - game.x;
  var movey = event.pageY - game.y;

  game.draggableCards.forEach((card) => {
    var child = document.getElementById(
      card.rank +  " " + card.deck
    ).children[0];

    if (event.pageX === 0) {
      var css = "z-index:9999;transform:translate(0px,0px);display:none;";
    } else {
      var css = "z-index:9999;pointer-events: none; transform: scale(1.05, 1.05) rotate(0deg) translate(" +
        movex +
        "px, " +
        movey +
        "px);";
    }
    child.style.cssText = css;
  });

};

export const dragEnter = (game, setgame, deck) => {
  if (game.selectedCard !== "") {
    console.log("No card")
  } 
  setgame((prevState) => ({
    ...prevState,
    targetDeck: deck,
  }));
};

export const dragEnd = (game, setgame) => {
  var tempDecks=[...game.decks];
  var tempDeckIndex = tempDecks.indexOf(game.targetDeck);

  //if user drag cards outside the dropablezone
  if(tempDeckIndex == -1){
    game.draggableCards.forEach((card) => {
      var child = document.getElementById(
        card.rank + " " + card.deck
      ).children[0];
      var css = "z-index:0;pointer-events:auto;";
      child.style.cssText = css;
    });
    errorSound.play();
    resetGameState(setgame);
    return;
  }
    // user drag cards to empty dropzone
  if (game.targetDeck == 0 ) {
    setSelectedCardstoDeck(
      game.targetDeck,
      game.fromDeck,
      game.selectedCard,
      setgame,
      game
    );
    flip.play();
    checkHandCompleted(game.targetDeck, game, setgame); 
    resetGameState(setgame);
  }// Drop on cards Case
  else if (isCardsMovabletoDeck(game.targetDeck, game)) {
    game.draggableCards.forEach((card) => {
      var child = document.getElementById(
        card.rank + " " + card.deck
      ).children[0];
      var css = "z-index:0;pointer-events:auto;display:none;";
        child.style.cssText = css;
      });
      setSelectedCardstoDeck(
        game.targetDeck,
        game.fromDeck,
        game.selectedCard,
        setgame,
        game
      );
      flip.play();
      checkHandCompleted(game.targetDeck, game, setgame);
      resetGameState(setgame);
      return;
  } else {
    game.draggableCards.forEach((card) => {
      var child = document.getElementById(
        card.rank + " " + card.deck
    ).children[0];
    var css = "z-index:0;pointer-events:auto;";
    child.style.cssText = css;
    });
    errorSound.play();
    resetGameState(setgame);
  }
};