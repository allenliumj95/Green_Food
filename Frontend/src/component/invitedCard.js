// import { useSelector } from "react-redux";
import { Fragment, useState, useEffect } from "react";
import classes from "./invitedCard.module.css";
import "./start.css";

const InvitedCard = () => {
  // const [invitedShift, setInvitedShift] = useState();
  const [invited, setInvited] = useState([]);

  // const shift = useSelector((state) => state.invitedShift);
  // // let invitedShift = shift.map()

  // shift
  //   .then((value) => {
  //     console.log(typeof value, value, "value");
  //     setInvitedShift(value);
  //     return value;
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  // console.log(typeof shift, shift, "000");
  // console.log(invitedShift, "111");

  useEffect(() => {
    async function fetchData() {
      const url = "http://localhost:8000";
      const res = await fetch(url);
      const data = await res.json();
      data
        .filter((shift) => shift.state === "invited")
        .map((invitedShift) => setInvited(invitedShift));
    }

    fetchData();
  }, []);

  return (
    <Fragment>
      <div class={classes.row}>
        <div class={classes.column1}>
          <div class={classes.card1}>
            <p className={classes.date}>{invited.date}</p>
            <p className={classes.task}>
              {invited.shift}
              <br />
              {invited.task}
            </p>
            <p className={classes.salary}>{invited.salary}</p>
          </div>
        </div>
        <div class={classes.column2}>
          <div class={classes.card2}>
            <p className={classes.hospital}>{invited.hospital}</p>
            <p className={classes.star}>
              <i class="fa fa-star fa_custom"></i>
              <i class="fa fa-star fa_custom"></i>
              <i class="fa fa-star fa_custom"></i>
              <i class="fa fa-star fa_custom"></i>
              <i class="fa fa-star fa_custom"></i>
              <button className={classes.apply}>APPLY</button>
              <button className={classes.decline}>DECLINE</button>
            </p>
            <p className={classes.location}>
              {invited.street}
              <br />
              {invited.location}
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default InvitedCard;
