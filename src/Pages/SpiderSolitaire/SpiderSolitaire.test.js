import { shallow } from 'enzyme';
import SpiderSolitaire from "./SpiderSolitaire";
import { findByTestAttr } from "../../test/testUtils";
import React from 'react';

const setup = () => shallow(<SpiderSolitaire/>);

describe("Spider Solitaire Component Test",() =>{
  let wrapper;

  beforeEach(()=>{
    wrapper = setup();
  });

  describe("render element without error",()=>{
    test('renders main ', () => {
      const mainWrapper = findByTestAttr(wrapper,'main');

      expect(mainWrapper.length).toBe(1);
    });

    test('renders card-holder ', () => {
      const holderWrapper = findByTestAttr(wrapper,'holder');

      expect(holderWrapper.length).toBe(0);
    });

    test('renders card-holder-hands ', () => {
      const remCardWrapper = findByTestAttr(wrapper,'rem-card-wrapper');

      expect(remCardWrapper).toHaveLength(1)
    });
  });  
});