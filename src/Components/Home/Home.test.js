import {shallow} from 'enzyme';
import Home from "./Home";
import GamplingGirl from "../../assets/images/gamblingGirl.png"
import { findByTestAttr } from "../../test/testUtils";

const setup = () => shallow(<Home/>);

describe("Home Component Test",() =>{
  let wrapper;

  beforeEach(()=>{
    wrapper = setup();
  })

  describe("render element without error",() =>{
    test('renders home-wrapper ', () => {
      const homeWrapper = findByTestAttr(wrapper,'home-app');

      expect(homeWrapper.length).toBe(1)
    });

    test('renders home-image-wrapper', () => {
      const homeImageWrapper = findByTestAttr(wrapper,'home-image-wrapper'); 

      expect(homeImageWrapper.length).toBe(1)
    });

    test('renders home-rules-wrapper', () => {
      const homeRulesWrapper = findByTestAttr(wrapper,'home-rules-wrapper');

      expect(homeRulesWrapper.length).toBe(1)
    });

    test('renders home-game-button', () => {
      const homeGameButton= findByTestAttr(wrapper,'home-game-button');
      const homeGameButtonText= findByTestAttr(wrapper,'home-game-button').text();  

      expect(homeGameButton.length).toBe(1)
      expect(homeGameButtonText).toBe("Start to  Game")
    });
  });
  
  describe("control element text and src attribute", () => {
    test('renders home-image src as PlayingCards ', () => {
      const homeImage = findByTestAttr(wrapper,'home-image'); 

      expect(homeImage.prop("src")).toBe(GamplingGirl);
    });

    test('renders home-header  text without error', () => {
      const homeHeader = findByTestAttr(wrapper,'home-header').text(); 

      expect(homeHeader).toBe("Welcome Reversed Spider SpiderSolitaire");
    });

    test('renders home-rules-header  text without error', () => {
      const homeRulesHeader = findByTestAttr(wrapper,'home-rules-header').text(); 

      expect(homeRulesHeader).toBe("How To Play ?");
    });

    test('renders home-rules text without error', () => {
      const homeRule1 = findByTestAttr(wrapper,'home-rule-1').text();
      const homeRule2 = findByTestAttr(wrapper,'home-rule-2').text();
      const homeRule3 = findByTestAttr(wrapper,'home-rule-3').text();
      const homeRule4 = findByTestAttr(wrapper,'home-rule-4').text();
      const homeRule5 = findByTestAttr(wrapper,'home-rule-5').text();

      expect(homeRule1).toBe("To win a hand, the cards must always be arranged in the order A, 2, 3, 4, 5, 6, 7, 8 ,9 , 10, J, Q, K.");
      expect(homeRule2).toBe("When the game is deadlocked or when you need a card, click on the top left and after that 10 new cards are placed on the deck.");
      expect(homeRule3).toBe("Of the fifty-four cards laid out on the table at the beginning of the game, only the top cards are face-up.");
      expect(homeRule4).toBe("If the face of the face up card changes, the face of the previous card is revealed.");
      expect(homeRule5).toBe("To win the game, there must be 8 sets of hands at the end of the game.");
    });
  });
});