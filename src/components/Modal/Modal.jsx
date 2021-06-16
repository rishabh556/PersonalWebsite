import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const Modal = ({ closeModal }) => {
  return ReactDOM.createPortal(
    <div onClick={closeModal} className="modal-overlay">

      <div onClick={(e)=>e.stopPropagation()} className="modal-container">

        <div className="upper-section">
          <h2>Hello,</h2>
          <p className="close"> &times;</p>
        </div>
        <div className="middle-section">
          <h3>Welcome to my portfolio, I hope you will like it</h3>
        </div>
        <div className="lower-section">
          <a onClick={closeModal} className="modal-btn btn-red">close</a>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};
export default Modal;