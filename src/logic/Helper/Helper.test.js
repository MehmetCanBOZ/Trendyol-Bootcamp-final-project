import { cardState, getRank, checkMovable , isCardsMovabletoDeck, checkDeck , selectCard ,resetGameState, checkHandCompleted} from "./Helper";
import React from "react";

describe("Helper Function Test ",() =>{
  const stateSetter = jest.fn()
  jest.spyOn(React, 'useState').mockImplementation(stateValue => [stateValue, stateSetter])
    
  describe("testing cardState function " ,() => {
    var card = ""
    var result = "";
    
    test('cardState function condition', () => {
      card = {rank:"K",isDown : false}
      result = cardState(card);

      expect(result).toBe("  card__king")
    });
      
    test('cardState function condition', () => {
      card = {rank:"K",isDown : true}
      result = cardState(card);

      expect(result).toBe(" card__down")
    });

    test('cardState function condition', () => {
      card = {rank:"A",isDown : false}
      result = cardState(card);
        
      expect(result).toBe(" ")
    });
  });

  describe("testing getRank function " ,() => {
    var rank = ""
    var rankValue = ""

    test('rank K value', () => {
      rank = "K"
      rankValue = getRank(rank);
      expect(rankValue).toBe(13)
    });

    test('rank Q value', () => {
      rank = "Q"
      rankValue = getRank(rank);
      expect(rankValue).toBe(12)
    });
    
    test('rank J value', () => {
      rank = "J"
      rankValue = getRank(rank);
      expect(rankValue).toBe(11)
    });

    test('rank A value', () => {
      rank = "A"
      rankValue = getRank(rank);
            expect(rankValue).toBe(1)
    });

    test('rank 5 value', () => {
      rank = "5"
      rankValue = getRank(rank);
      expect(rankValue).toBe(5)
    });
  
  })

  describe("testing checkMovable function " ,() => {
    var deckSS = ""
    var cardSS = ""
    var checkMovableBool = ""

    test('check if the draggable card is movable if cardRank value greater than it ', () => {
      deckSS = [[{rank:"A"},{rank:"2"},{rank:"3"},{rank:"4"}]]
      cardSS = {rank:"2"} 
      checkMovableBool = checkMovable(cardSS,deckSS)
      
      expect(checkMovableBool).toBeTruthy();
    });

    test.skip('check if the draggable card is movable if cardRank value greater less than it ', () => {
      var deckSSS = ""
      var cardSSS = ""
      var checkMovableBoolS = ""
      
      jest.mock('./Helper', () => ({
        __esModule: true,
        getRank: jest.fn((rank) => parseInt(rank))
      }));
      
      deckSSS = [[{rank:"A"},{rank:"2"},{rank:"4"}]]
      cardSSS = {rank:"2"} 
      checkMovableBoolS = checkMovable(cardSSS,deckSSS)
      
      expect(checkMovableBoolS).toBeFalsy();
    });
  
  });

  describe("testing checkMove function " ,() => {
    var deck = ""
    var game = ""
    var checkMoveBool = ""

    test('check if the draggable card is movable if cardRank value greater than it ', () => {
      deck = [[{rank:"A"},{rank:"2"},{rank:"3"},{rank:"4"},{rank:"2"}]]
      game = { selectedCard:{ rank:"5" }} 
      checkMoveBool = isCardsMovabletoDeck(deck,game)
          
      expect(checkMoveBool).toBeFalsy();
    });

    test.skip('check if the draggable card is movable if cardRank value greater than it ', () => {
      deck = [[{rank:"A"},{rank:"2"},{rank:"3"},{rank:"4"},{rank:"5"}]]
      game = { selectedCard:{ rank:"6" }} 
      checkMoveBool = isCardsMovabletoDeck(deck,game)
      
      expect(checkMoveBool).toBeFalsy();
    });
  });

  describe("testing checkDeck function " ,() => {
    var deck = ""
    var checkDeckResult =""
    
    test('check currenct deck is expected array ', () => {
      deck = [{rank:"A"},{rank:"2"},{rank:"3"},{rank:"4"}]
      checkDeckResult = checkDeck(deck)
      
      expect(checkDeckResult).toBeFalsy();
    });
       
    test('check currenct deck is expected array ', () => {
      deck = [{rank:"A"},{rank:"5"},{rank:"6"},{rank:"7"},{rank:"A"},{rank:"2"},{rank:"3"},{rank:"4"},{rank:"5"},{rank:"6"},{rank:"7"},{rank:"8"},{rank:"9"},{rank:"10"},{rank:"J"},{rank:"Q"},{rank:"K"}]
      checkDeckResult = checkDeck(deck)
        
      expect(checkDeckResult).toBe(4);
    });

  });

  describe("testing selectCard function " ,() => {
    var card = ""
    var deck =""
    var selectedCard = ""
      
    test('check currenct deck is expected array ', () => {
      card = {rank:"A" ,isDown:false}
      deck = [{rank:"A"},{rank:"2"},{rank:"3"},{rank:"4"}]
      selectedCard = selectCard(card,deck,stateSetter)
      
      expect(() => selectCard(card,deck,stateSetter)).not.toThrow();
      expect(stateSetter).toBeCalled();
    });

    test('check currenct deck is expected array ', () => {
      card = {rank:"A" ,isDown:true}
      deck = [{rank:"A"},{rank:"2"},{rank:"3"},{rank:"4"}]
      selectedCard = selectCard(card,deck,stateSetter)
      
      expect(() => selectCard(card,deck,stateSetter)).not.toThrow();
      expect(stateSetter).not.toBeCalled();
    });
  });

  describe("testing removeSelection function " ,() => {
    test("check removeSelection",()=>{
      expect(() => resetGameState(stateSetter)).not.toThrow();
      expect(stateSetter).toBeCalled();
    })
  });

  describe("testing isHandComplete function " ,() => {
    var deck = [""]
    var game = {selectedCard:"",hands:0,decks:[[{rank:"A"},{rank:"2"},{rank:"3"},{rank:"4"}],[{rank:"6"},{rank:"8"},{rank:"9"},{rank:"10"}]]}
      
    test("check removeSelection",()=>{
      deck = [""]
      
      expect(() => checkHandCompleted(deck, game,stateSetter)).not.toThrow();
    });
  }); 
});