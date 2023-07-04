import React from "react";
import "./Modal.css";
import { useDispatch } from "react-redux";
import { closeModal } from "../../features/Modal/modalSlice";
import { auth } from "../../firebase";
import { signOut } from "../../features/user/userSlice";

const Modal = () => {
  const dispatch = useDispatch();

  const logoutOfTheApp = () => {
    auth.signOut().then(() => dispatch(signOut()));
    dispatch(closeModal());
  };

  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>Are you sure you want to log out?</h4>
        <div className="btn-container">
          <button className="btn confirm-btn" onClick={logoutOfTheApp}>
            Yes
          </button>
          <button
            className="btn clear-btn"
            onClick={() => dispatch(closeModal())}
          >
            No
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
