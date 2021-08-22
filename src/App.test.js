import {shallow} from 'enzyme';
import App from "./App";
import { findByTestAttr } from "./test/testUtils";

const setup = () => shallow(<App/>);

describe("CardHolder Component Test",() =>{
  let wrapper;

  beforeEach(()=>{
    wrapper = setup();
  });

  
  test('renders header-wrapper', () => {
    const appHeader= findByTestAttr(wrapper,'app-header');

    expect(appHeader.length).toBe(1);
  });
  test('renders header-wrapper', () => {
    const appHeaderText = findByTestAttr(wrapper,'app-header').text();

    expect(appHeaderText).toBe("Reversed Spider Solitaire");
  });
   
});