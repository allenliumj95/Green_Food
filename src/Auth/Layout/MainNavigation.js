import { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../store/auth-context";

import classes from "./MainNavigation.module.css";
import Fruit from "../image/fruit.jpg";

const MainNavigation = () => {
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
  };

  return (
    <Fragment>
      <header className={classes.header}>
        <Link to="/">
          <div className={classes.logo}>Green Food</div>
        </Link>

        <nav>
          <ul>
            {!isLoggedIn && (
              <li>
                <Link to="/SignUp">Sign Up</Link>
              </li>
            )}

            {!isLoggedIn && (
              <li>
                <Link to="/Login">Login</Link>
              </li>
            )}

            {isLoggedIn && (
              <li>
                <Link to="/Order">Order</Link>
              </li>
            )}

            {isLoggedIn && (
              <li>
                <Link to="/ChangePassword">Password</Link>
              </li>
            )}

            {isLoggedIn && (
              <li>
                <button onClick={logoutHandler}>Logout</button>
              </li>
            )}
          </ul>
        </nav>
      </header>

      <div className={classes["main-image"]}>
        <img src={Fruit} alt="A table full of fresh food!" />
      </div>
    </Fragment>
  );
};

export default MainNavigation;
