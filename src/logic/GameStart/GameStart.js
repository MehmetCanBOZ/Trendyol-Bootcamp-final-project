import * as _ from "lodash";

const cardRanks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

export const gameStarter =  () => {
  let cards = [],
    decks;

  cardRanks.forEach((rank) => {
    for (let i = 1; i <= 8; i++) {
      cards.push({
      rank: rank,
      isDown: true,
      deck: i,
      });
    }
  });

  let shuffledCards = shuffleCardForGame(cards);
  decks = DealCards(shuffledCards);

  return decks;
};

const shuffleCardForGame = (cards) =>{
  const  shuffledCards = _.shuffle(cards);
  return shuffledCards;
}
 
const DealCards = (shuffledCards) =>{
  let result;

  result = _.chunk(shuffledCards.slice(0, 50), 5);
  result[0].push(shuffledCards[50])
  result[1].push(shuffledCards[51])
  result[2].push(shuffledCards[52])
  result[3].push(shuffledCards[53])
  result[10] = shuffledCards.slice(54);
     
  for (let i = 0; i <= 9; i++) {
    result[i][result[i].length - 1].isDown = false;
  }

  return result;
}