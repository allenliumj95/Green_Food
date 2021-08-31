import classes from "./Welcome.module.css";
import { Link } from "react-router-dom";

const WelcomeContent = () => {
  return (
    <section className={classes.welcome}>
      <h2>
        Start your
        <Link to="/Order" className={classes.Link}>
          {" "}
          ORDER{" "}
        </Link>
        Here!
      </h2>
    </section>
  );
};

export default WelcomeContent;
