import React from "react";
import {shallow} from 'enzyme';
import RemainingCards from "./RemainingCards";
import { findByTestAttr } from "../../test/testUtils";

const setGame = jest.fn;

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useEffect: jest.fn(),
}));

const defaultProps = { game:{remCardDeck:5},setGame};

const setup = (props={}) =>{
  const setUpProps={...defaultProps,...props};
  return shallow(<RemainingCards {...setUpProps}/>);
}

describe("CardHolder Component Test",() =>{
  let wrapper;

  beforeEach(()=>{
   wrapper = setup();
  });

  describe("render element without error",()=>{
    test('renders rem-card', () => {
      const remCards = findByTestAttr(wrapper,'rem-cards');

      expect(remCards.length).toBe(1);
    });

    test('renders rem-cards-container', () => {
      const remCardsContainer = findByTestAttr(wrapper,'rem-cards-container');
      
      expect(remCardsContainer.length).toBe(5);
    });
  });
});