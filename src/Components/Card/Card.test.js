import React from 'react';
import { shallow } from 'enzyme';
import Card from "./Card";
import { findByTestAttr, checkProp } from "../../test/testUtils";

const mockIsDownState = jest.fn();

jest.mock('react',()=>({
  ...jest.requireActual('react'),
  useState:(initialState) => [initialState,mockIsDownState]
}))

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useEffect: jest.fn(),
}));

const defaultProps = { card:{rank:"5",suit:"spade",isDown:true, deck:1 }};

const setup = (props={}) =>{
  const setUpProps={...defaultProps,...props};
  return shallow(<Card {...setUpProps}/>);
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
      expect(cardWrapper.hasClass('card__wrapper')).toEqual(true);
    });

    test('renders card-content-left without error', () => {
      const cardContentLeft = findByTestAttr(wrapper,'card-content-left');
      const cardContentLeftText = cardContentLeft.text();

      expect(cardContentLeft.length).toBe(1);
      expect(cardContentLeftText).toBe("5");
    });

    test('renders card-content-right without error', () => {
      const cardContentRight = findByTestAttr(wrapper,'card-content-right');
      const cardContentRightText = cardContentRight.text();

      expect(cardContentRight.length).toBe(1);
      expect(cardContentRightText).toBe("5");
    });
    
    test('renders card-suit without error', () => {
      const cardSuit = findByTestAttr(wrapper,'card-suit');

      expect(cardSuit.length).toBe(1);
    });
  });

  describe("render element class correct" ,() =>{
    test('renders card-content-left hasClass card__content card__rank-left', () => {
      const cardContentLeft = findByTestAttr(wrapper,'card-content-left');

      expect(cardContentLeft.hasClass('card__content')).toEqual(true);
      expect(cardContentLeft.hasClass('card__rank-left')).toEqual(true);
    });

    test('renders card-content-right hasClass card__content card__rank-right', () => {
      const cardContentRight = findByTestAttr(wrapper,'card-content-right');

      expect(cardContentRight.hasClass('card__content')).toEqual(true);
      expect(cardContentRight.hasClass('card__rank-right')).toEqual(true);
    });
  });

  test('does not throw warning with expected props', () => {
    const expectedProps = { card:{rank:"5",suit:"spade",isDown:true,deck:1 }}

    checkProp(Card,expectedProps);
  });

  test('card-wrapper has down class ', () => {
    const cardWrapper = findByTestAttr(wrapper,'card-wrapper');

    expect(cardWrapper.hasClass('card__down')).toEqual(false);
  });

  describe("state control" ,() =>{
    test("not render card-container when initial render",()=>{
      const cardContainer = findByTestAttr(wrapper,'card-container');

      expect(cardContainer.length).toBe(0);
    })
  });
});