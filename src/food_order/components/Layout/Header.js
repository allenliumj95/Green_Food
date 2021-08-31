import { Fragment } from "react";
import { Link } from "react-router-dom";

import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "../Image/food.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <Link to="/ChangePassword" className={classes.setting}>
          Setting
        </Link>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Nice food!" />
      </div>
    </Fragment>
  );
};

export default Header;
