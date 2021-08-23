import "./Modal.scss";
import { playAgain } from "../../logic/Helper/Helper";

function Modal( {setGame}) {
  return (
    <div data-test="modal-container" className="container">
      <div data-test="modal-wrapper" className = "modal-wrapper">
        <div data-test="modal-header" className="modal-header">
          <p data-test="modal-header-info">CONGRATULATIONS</p>
        </div>
        <div data-test="modal-content" className="modal-content">
          <div data-test="modal-body" className="modal-body">
            <p data-test="modal-info">You complete 8 hands and won the game. If you want to play again, click the play again. Enjoyyyyyy !!!</p>
          </div>
          <div data-test="modal-footer" className="modal-footer">
            <button data-test="modal-button"  className="btn-cancel" onClick={(e) => playAgain(setGame)}>Play Again</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
