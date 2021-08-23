import * as _ from "lodash";
import successSound from "../../assets/sound/success.mp3";
import dealSound from "../../assets/sound/deal.mp3";

var success = new Audio(successSound);
var deal = new Audio(dealSound);

export const getRank = (rank) => {
  if (rank === "K" || rank === "Q" || rank === "J" || rank === "A") {
    switch (rank) {
      case "K":
        return 13;
      case "Q":
        return 12;
      case "J":
        return 11;
      case "A":
        return 1;
    }
  } else {
    return parseInt(rank);
  }
};

export const checkMovable = (card, deck) => {
  var tempDeck = [...deck];
  var movingCards = tempDeck.slice(deck.indexOf(card));
  var ranks = movingCards.map((curCard) => {
    return getRank(curCard.rank);
  });
  var curRank = getRank(card.rank);
 
  for (let i = 1; i < ranks.length; i++) {
    if ( ranks[i] - curRank != 1){
      return false;
    } 
    curRank = ranks[i];
  }
  
  return true;
};
  
export const isCardsMovabletoDeck = (deck, game) => {
  var lastCard = deck[deck.length - 1]
    
  if (getRank(game.selectedCard.rank) - getRank(lastCard.rank) == 1) {
    return true;
  }

  return false;
};
  
export const resetGameState = (setgame) => {
  setgame((prevState) => ({
    ...prevState,
    draggableCards: [],
    selectedCard: "",
    fromDeck: "",
    targetDeck: "",
    modalShow:false,
  }));
};
  
export const setSelectedCardstoDeck = function (toDeck, fromDeck, fromCard, setgame, game) {
  try{
    var tempDeck = [...game.decks];
    var to = tempDeck.indexOf(toDeck);
    var from = tempDeck.indexOf(fromDeck);
    var cardIdx = tempDeck[from].indexOf(fromCard);
    var movedCards = tempDeck[from].splice(cardIdx);
    movedCards.forEach((card) => {
      tempDeck[to].push(card);
    });
  }catch(err){
    console.log(err);
  }
  try{
    if (tempDeck[from][tempDeck[from].length - 1].isDown == true) {
      tempDeck[from][tempDeck[from].length - 1].isDown = false;
    }
  }catch(err) {
    console.log(err);
  }
  
  setgame((prevState) => ({
    ...prevState,
    decks: tempDeck,
  }));
  
};

export const selectCard = (card, deck, setgame) => {
  if (card.isDown) {
    return;
  }
  
  if (checkMovable(card, deck)) {
    var tempDeck = [...deck];
    var selected = tempDeck.slice(deck.indexOf(card));

    setgame((prevState) => ({
      ...prevState,
      draggableCards: selected,
      selectedCard: card,
      fromDeck: deck,
    }));
  }
};
  
export const checkDeck = (deck) => {  
  var ranks = deck.map((card) => {
    return getRank(card.rank);
  }); 
  
  const expectedArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
    if (_.isEqual(expectedArray, ranks.slice(-13))) {
      return ranks.length - 13;
    }
  
  return false;
};
  
export const checkHandCompleted = (deck, game, setgame) => {
  try{
    var len = checkDeck(deck);
    if (len !== false) {
      var tempDecks = [...game.decks];
      var curDeckIdx = tempDecks.indexOf(deck);

      if(tempDecks[curDeckIdx]==undefined){
        return;
      }

      tempDecks[curDeckIdx].splice(len);
      var curHands = game.hands;
      var curScore = game.score;

      if (tempDecks[curDeckIdx].length != 0) {
        tempDecks[curDeckIdx][tempDecks[curDeckIdx].length - 1].isDown = false;
      }
      success.play();
      setgame((prevState) => ({
        ...prevState,
        decks: tempDecks,
        hands: curHands + 1,
        score:curScore + 100,
      }));

      if (curHands + 1 === 8) {
        setgame((prevState) => ({
          ...prevState,
          modalShow:true,
          score:curScore + 100,
        }));
      }
    }

  }catch(err){
    console.log(err);
  }
};
  
export const distributeRemCards = (game, setgame) => {
  var curRemCardDeck = game.remCardDeck
  deal.play();
  
  if (game.decks[10].length !== 0) {
    var tempDecks = [...game.decks];

    tempDecks.forEach((tempDeck) => {    
      if (tempDecks[10].length > 0) {
        var tempCard = tempDecks[10].pop();
        tempCard.isDown = false;
        tempDeck.push(tempCard);
      }
    });

    var curRemCardDeck = game.remCardDeck
    
    setgame((prevState) => ({
      ...prevState,
      decks: tempDecks,
      remCardDeck:curRemCardDeck - 1
    }));

    tempDecks.forEach((tempDeck) => {
      checkHandCompleted(tempDeck, game, setgame);
    });
  }
};

export const cardState = (card) =>{
  let result ;
  if (card.isDown) {
    result = " card__down";
  }else if(card.rank === "K") {
    result = "  card__king";
  }else{
    result= " ";
  }

  return result;
}