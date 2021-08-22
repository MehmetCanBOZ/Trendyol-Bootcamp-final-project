import { shallow } from 'enzyme';
import HandsHolder from "./HandsHolder";
import { findByTestAttr } from "../../test/testUtils";

const defaultProps = {game:{hands:3}};

const setup = (props={}) =>{
  const setUpProps={...defaultProps,...props};
  return shallow(<HandsHolder {...setUpProps}/>);
}

describe("CardHolder Component Test",() =>{
  let wrapper;

  beforeEach(()=>{
    wrapper = setup();
  });

  describe("render element without error",()=>{
    test('renders holder without error', () => {
      const Holder = findByTestAttr(wrapper,'holder');

      expect(Holder.lenght).toBe(undefined);
    });

    test('renders card-holder-nohands without error', () => {
      const cardHolderNoHands = findByTestAttr(wrapper,'card-holder-nohands');

      expect(cardHolderNoHands.lenght).toBe(undefined);
    });

    test('renders card-holder-hands without error', () => {
      const cardHolderHands = findByTestAttr(wrapper,'card-holder-hands');

    expect(cardHolderHands.lenght).toBe(undefined);
    });
  });
});