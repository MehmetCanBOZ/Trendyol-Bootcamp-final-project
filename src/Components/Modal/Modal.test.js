import { shallow } from 'enzyme';
import Modal from "./Modal";
import { findByTestAttr } from "../../test/testUtils";

const setup = () => shallow(<Modal/>);

describe("CardHolder Component Test",() =>{
  let wrapper;

  beforeEach(()=>{
    wrapper = setup();
  });

  describe("render element without error",()=>{
    test('renders modal-container', () => {
      const modalContainer = findByTestAttr(wrapper,'modal-container');

      expect(modalContainer.length).toBe(1);
    });

    test('renders modal-wrapper', () => {
      const modalWrapper = findByTestAttr(wrapper,'modal-wrapper');

      expect(modalWrapper.length).toBe(1);
    });

    test('renders modal-header', () => {
      const modalHeader= findByTestAttr(wrapper,'modal-header');

      expect(modalHeader.length).toBe(1);
    });

    test('renders modal-header-info', () => {
      const modalHeaderInfo= findByTestAttr(wrapper,'modal-header-info');
      const modalHeaderInfoText= findByTestAttr(wrapper,'modal-header-info').text();

      expect(modalHeaderInfo.length).toBe(1);
      expect(modalHeaderInfoText).toBe("CONGRATULATIONS");
    });

    test('renders modal-content-info', () => {
      const modalContent= findByTestAttr(wrapper,'modal-content');
        
      expect(modalContent.length).toBe(1);
    });

    test('renders modal-button', () => {
      const modalButton = findByTestAttr(wrapper,'modal-button');
    
      expect(modalButton.length).toBe(1);
    });
    test('renders modal-info', () => {
      const modalInfo= findByTestAttr(wrapper,'modal-info');
      const modalInfoText= findByTestAttr(wrapper,'modal-info').text();
        
      expect(modalInfo.length).toBe(1);
      expect(modalInfoText).toBe("You complete 8 hands and won the game. If you want to play again, go home and start to game. Enjoyyyyyy !!!");
    }); 
  });
});