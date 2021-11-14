import { useState } from "react";
import { Fragment } from "react";
import InvitedCard from "../component/invitedCard";
import NormalCard from "../component/normalCard";
import NormalCard2 from "../component/normalCard2";

import classes from "./Shifts.module.css";

const Shifts = () => {
  const [firstPage, setFirstPage] = useState(true);

  const nextPageHandler = () => {
    setFirstPage(false);
  };
  const previousPageHandler = () => {
    setFirstPage(true);
  };

  return (
    <Fragment>
      <div className={classes.page}>
        <div>
          <p className={classes.Heading1}>Shifts</p>
          <p className={classes.text}>You've been invited</p>
          <div className={classes.invitedCard}>
            <div>
              <InvitedCard />
            </div>
            <div className={classes.arrow}>
              <button
                className={classes.arrowRight}
                onClick={nextPageHandler}
              ></button>
              {firstPage && <i className={classes.date}>14-20 Apr 2019</i>}
              {!firstPage && <i className={classes.date}>21-28 Apr 2019</i>}
              <button
                className={classes.arrowLeft}
                onClick={previousPageHandler}
              ></button>
            </div>
            <div>
              {firstPage && <NormalCard />}
              {!firstPage && <NormalCard2 />}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Shifts;
