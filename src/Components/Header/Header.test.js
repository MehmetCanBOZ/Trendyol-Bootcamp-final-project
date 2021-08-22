import { shallow } from 'enzyme';
import Header from "./Header";
import { findByTestAttr } from "../../test/testUtils";
import Trophy from "../../assets/images/trophy.svg"
import StopWatch from "../../assets/images/stopwatch.svg";

const setup = () => shallow(<Header/>);

describe("CardHolder Component Test",() =>{
  let wrapper;

  beforeEach(()=>{
    wrapper = setup();
  });

  describe("render element without error",()=>{
    test('renders header-wrapper', () => {
      const headerWrapper = findByTestAttr(wrapper,'header-wrapper');
      
      expect(headerWrapper.length).toBe(1);
    });

    test('renders score-wrapper', () => {
      const scoreWrapper = findByTestAttr(wrapper,'score-wrapper');

      expect(scoreWrapper.length).toBe(1);
    });

    test('renders score-image', () => {
      const scoreImage = findByTestAttr(wrapper,'score-image');

      expect(scoreImage.length).toBe(1);
    });

    test('renders timer-wrapper', () => {
      const timerWrapper = findByTestAttr(wrapper,'timer-wrapper');

      expect(timerWrapper.length).toBe(1);
    });

    test('renders timer-image', () => {
      const timerImage = findByTestAttr(wrapper,'timer-image');

      expect(timerImage.length).toBe(1);
    });
  });
  
  describe("control img src attribute",()=>{
    test('renders score-image', () => {
      const scoreImage = findByTestAttr(wrapper,'score-image');

      expect(scoreImage.prop("src")).toBe(Trophy);
    });

    test('renders timer-image', () => {
      const timerImage = findByTestAttr(wrapper,'timer-image');

      expect(timerImage.prop("src")).toBe(StopWatch);
    });
  });
});