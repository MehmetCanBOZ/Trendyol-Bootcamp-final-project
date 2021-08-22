import { shallow } from 'enzyme';
import Timer from "./Timer";
import { findByTestAttr } from "../../test/testUtils";

const setup = () => shallow(<Timer/>);

describe("CardHolder Component Test",() =>{
  let wrapper;

  beforeEach(()=>{
    wrapper = setup();
  });

  describe("render element without error",()=>{
    test('renders timer-wrapper', () => {
      const timerWrapper = findByTestAttr(wrapper,'timer-wrapper');

     expect(timerWrapper.length).toBe(1);
    });

    test('renders display-wrapper', () => {
      const displayWrapper = findByTestAttr(wrapper,'display-wrapper');

      expect(displayWrapper.length).toBe(1);
    });

    test('renders display-hour', () => {
      const displayHour = findByTestAttr(wrapper,'display-hour');

      expect(displayHour.length).toBe(1);
    });

    test('renders display-minute', () => {
      const displayMinute = findByTestAttr(wrapper,'display-minute');

      expect(displayMinute.length).toBe(1);
    });

    test('renders display-second', () => {
      const displaySecond = findByTestAttr(wrapper,'display-second');

      expect(displaySecond.length).toBe(1);
    });
  });
});