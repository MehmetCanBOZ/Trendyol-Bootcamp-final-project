import React from 'react';
import { dragStart , drag, dragEnter } from '../../logic/DragandDrop/DragandDrop';
import { resetGameState } from "../Helper/Helper"

jest.mock('../../logic/Helper/Helper',() => ({
  __esModule: true,
  resetGameState: jest.fn(() => 'Mocked someFunction!'),
  selectCard:jest.fn(() => 'Mocked someFunction!'),
}));

describe("Tests Drag and Drop Functions",()=>{
  const stateSetter = jest.fn()
  const setData = jest.fn()
  const setDragImage = jest.fn()
  var event =""
  var card =""
  var deck =""
  var game =""
  
  jest.spyOn(React, 'useState').mockImplementation(stateValue => [stateValue, stateSetter]);

  describe("dragStart test",()=>{
    event = {pageX:120,target:{id:"6"},pageY:65,dataTransfer:{setData,setDragImage}}
    card ={rank:5,isDown:true};
    deck= [{rank:5,isDown:true},{rank:6,isDown:false}]
    game =[]

    test('Should render dragStart', () =>
    {   
      dragStart(event,card,deck,game,stateSetter);
      expect(resetGameState).toBeCalled()
    });
  });
  
  describe("dragEnter test",()=>{
    deck= [{rank:5,isDown:true},{rank:6,isDown:false}]
    game = {draggableCards:[{rank:5,deck:1},{rank:6,deck:2}],selectedCard:""}

    test('should called setGame in dragenter', () =>
    {
      dragEnter(game,stateSetter,deck);
      expect(stateSetter).toBeCalled()
    });
    
    test('should called setGame in dragenter with selectedCard', () =>
    {    
      game = {draggableCards:[{rank:5,deck:1},{rank:6,deck:2}],   selectedCard:"5"}
      dragEnter(game,stateSetter,deck);
      expect(stateSetter).toBeCalled()
    });
  });
  describe("drag test",()=>{
    event = {pageX:120,target:{id:"6"},pageY:65,dataTransfer:{setData,setDragImage}};    
    game = {draggableCards:[{rank:"4",deck:1},{rank:"6",deck:2}],selectedCard:""};

    test.skip('Should test drag event', () =>
    {
      drag(event,game);  
    });

  });
});