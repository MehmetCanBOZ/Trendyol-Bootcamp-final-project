import { shallow } from 'enzyme';
import CardHolder from "./CardHolder";
import { findByTestAttr } from "../../test/testUtils";

const setup = () => shallow(<CardHolder/>);

describe("CardHolder Component Test",() =>{
  let wrapper;

  beforeEach(()=>{
    wrapper = setup();
  });

  describe("render element without error",()=>{
    test('renders card-holder without error', () => {
      const cardHolder = findByTestAttr(wrapper,'card-holder');

      expect((cardHolder).exists()).toBeTruthy();
    });
  }); 
});