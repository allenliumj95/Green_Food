import { Fragment } from "react";
import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";
import Logo from "../image/uPAGED-logo.png";

const MainNavigation = () => {
  return (
    <Fragment>
      {/* the uPAGED icon */}
      <header className={classes.header}>
        <Link to="/">
          <div className={classes["main-image"]}>
            <img src={Logo} alt="uPAGED Logo" />
          </div>
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <button>Find Work</button>
            </li>
            <li>
              <button>Timesheets</button>
            </li>
            <li>
              <button>Messaging</button>
            </li>
          </ul>
        </nav>
        <Link to="/">
          <div className={classes.logout}>
            <img
              className={classes.profile}
              alt="100x100"
              width
              src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
              data-holder-rendered="true"
            />

            <button>Log out</button>
          </div>
        </Link>
      </header>
    </Fragment>
  );
};

export default MainNavigation;
