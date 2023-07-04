import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Inbox from "./components/Inbox/Inbox";
import { useDispatch, useSelector } from "react-redux";
import Login from "./components/Login/Login";
import ComposeBox from "./components/ComposeBox/ComposeBox";
import { useEffect, useState } from "react";
import db from "./firebase";
import { setMails } from "./features/user/userSlice";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mail from "./components/Mails/Mail";
import Modal from "./components/Modal/Modal";

function App() {
  const { user, showCompose } = useSelector((store) => store.user);
  const { isOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    db.collection("mails")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        dispatch(
          setMails(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        )
      );
  }, []);

  return (
    <Router>
      {isOpen && <Modal />}
      <div className="app">
        {showCompose && <ComposeBox />}
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <div className="app__body">
              <Sidebar />
              <Routes>
                <Route path="/" element={<Inbox />} />
                <Route path="/mail" element={<Mail />} />
              </Routes>
            </div>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
