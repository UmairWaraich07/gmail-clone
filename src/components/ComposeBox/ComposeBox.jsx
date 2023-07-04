import React, { useState } from "react";
import "./ComposeBox.css";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { closeCompose } from "../../features/user/userSlice";
import db from "../../firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const ComposeBox = () => {
  const dispatch = useDispatch();
  const [receiver, setReceiver] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const sendMail = (e) => {
    e.preventDefault();

    db.collection("mails").add({
      name: receiver,
      title: subject,
      message: message,
      timestamp: firebase.firestore.Timestamp.now(),
    });

    dispatch(closeCompose());
  };

  return (
    <div className="composeBox">
      <div className="composeBox__header">
        <h4>New Message</h4>
        <div onClick={() => dispatch(closeCompose())}>
          <CloseIcon />
        </div>
      </div>
      <form className="composeBox__form" onSubmit={sendMail}>
        <div className="composeBox__to">
          <p>To</p>
          <input
            type="text"
            value={receiver}
            onChange={(e) => setReceiver(e.target.value)}
            required
          />
        </div>
        <div className="composeBox__subject">
          <input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>
        <textarea
          cols="48"
          rows="10"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <button type="submit" className="composeBox__btn">
          Send
        </button>
      </form>
    </div>
  );
};

export default ComposeBox;
