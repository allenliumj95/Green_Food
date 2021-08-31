import { useState, useRef, useContext, Fragment } from "react";
import AuthContext from "../../store/auth-context";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

import classes from "./LoginForm.module.css";

const LoginForm = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const authCtx = useContext(AuthContext);

  const passwordInputRef = useRef();
  const emailInputRef = useRef();

  const switchLoginHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    // add validaiton
    setIsLoading(true);
    let url;

    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB-UpDO5607fLsZJOh8fm3dnHnHoLJvETg";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB-UpDO5607fLsZJOh8fm3dnHnHoLJvETg";
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication failed";
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        const expirationTime = new Date(
          new Date().getTime() + +data.expiresIn * 1000
        );
        authCtx.login(data.idToken, expirationTime.toISOString());
        history.replace("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <Fragment>
      <section className={classes.auth}>
        <h1>login</h1>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" required ref={emailInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Your Password</label>
            <input
              type="password"
              id="password"
              required
              ref={passwordInputRef}
            />
          </div>
          <div className={classes.actions}>
            {!isLoading && <button onClick={switchLoginHandler}>Login</button>}
            {isLoading && <p>Sending request...</p>}
            <Link to="/SignUp" className={classes.toggle}>
              Don't have an account?SignUp
            </Link>
          </div>
        </form>
      </section>
    </Fragment>
  );
};

export default LoginForm;
