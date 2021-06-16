import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const Modal = ({ closeModal }) => {
  return ReactDOM.createPortal(
    <div onClick={closeModal} className="modal-overlay">

      <div onClick={(e)=>e.stopPropagation()} className="modal-container">

        <div className="upper-section">
          <h1>Huge Announcement!!</h1>
          <p className="close"> &times;</p>
        </div>
        <div className="middle-section">
          <h3>This portfolio i built while learning react!!</h3>
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