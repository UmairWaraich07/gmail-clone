import React, { useEffect } from "react";
import "./Login.css";
import logo from "../../assets/gmail.png";
import { auth, provider } from "../../firebase";
import { useDispatch } from "react-redux";
import { setUser } from "../../features/user/userSlice";

const Login = () => {
  const dispatch = useDispatch();

  const loginToApp = () => {
    auth
      .signInWithPopup(provider)
      .then(({ user }) =>
        dispatch(
          setUser({
            displayName: user.displayName,
            email: user.email,
            photourl: user.photoURL,
          })
        )
      )
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        //user is logged in
        dispatch(
          setUser({
            displayName: user.displayName,
            email: user.email,
            photourl: user.photoURL,
          })
        );
      } else {
        dispatch(signOut());
      }
    });
  }, []);
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://static.dezeen.com/uploads/2020/10/gmail-google-logo-rebrand-workspace-design_dezeen_2364_col_0.jpg"
          alt="Gmail logo"
        />

        <button type="button" onClick={loginToApp}>
          LOGIN
        </button>
      </div>
    </div>
  );
};

export default Login;
