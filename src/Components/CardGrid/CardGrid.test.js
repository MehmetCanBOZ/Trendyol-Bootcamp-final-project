import React from 'react';
import { shallow } from 'enzyme';
import CardGrid from "./CardGrid";
import { findByTestAttr, checkProp } from "../../test/testUtils";
import { dragEnter, dragEnd } from '../../logic/DragandDrop/DragandDrop';

jest.mock('../../logic/DragandDrop/DragandDrop',() => ({
  __esModule: true,
  dragEnter: jest.fn(() => 'Mocked someFunction!')
}));

const setGame = jest.fn;

const defaultProps = { deck:[{rank:"5",deck:1},{rank:"6",deck:2}], index : 4, game:{decks:[[{rank:"5",deck:1}],[{rank:"6",deck:1}]]},setGame};

const setup = (props={}) =>{
  const setUpProps={...defaultProps,...props};
  return shallow(<CardGrid {...setUpProps}/>);
}

describe("Card Component Tests",()=>{
  let wrapper;
  let mockIsDownState;
  
  beforeEach(()=>{
    wrapper = setup();
    
    mockIsDownState = jest.fn();
    const useStateSpy = jest.spyOn(React, 'useState')
    useStateSpy.mockImplementation((init) => [init, mockIsDownState]);
  })

  describe("render element without error",()=>{
    test('renders card-wrapper without error', () => {
      const cardWrapper = findByTestAttr(wrapper,'card-wrapper');

      expect(cardWrapper.length).toBe(1);
      expect(cardWrapper.hasClass('card__wrapper')).toEqual(false);
      expect(dragEnter).toBeDefined();
    });

    test('renders card-container without error', () => {
      const cardContainer = findByTestAttr(wrapper,'card-container');

      expect(cardContainer.length).toBe(2);
    });
  });
});