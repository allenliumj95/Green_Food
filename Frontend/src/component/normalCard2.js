import { useEffect, useState } from "react";
import { Fragment } from "react";
import classes from "./normalCard.module.css";
import "./start.css";

const InvitedCard2 = () => {
  const [shift, setShift] = useState([]);
  const [shift1, setShift1] = useState([]);
  const [shift2, setShift2] = useState([]);
  const [shift3, setShift3] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const url = "http://localhost:8000";
      const res = await fetch(url);
      const data = await res.json();

      const normalShift = [];

      for (var i = 0; i < data.length; i++) {
        if (data[i].state === "normal") {
          normalShift.push({
            state: data[i].state,
            weather: data[i].weather,
            date: data[i].date,
            shift: data[i].shift,
            task: data[i].task,
            salary: data[i].salary,
            hospital: data[i].hospital,
            street: data[i].street,
            location: data[i].location,
            star: data[i].star,
          });
        }
      }

      setShift(normalShift[4]);
      setShift1(normalShift[5]);
      setShift2(normalShift[6]);
      setShift3(normalShift[7]);
    }
    fetchData();
  }, []);
  //make the second page of normal card
  return (
    <Fragment>
      <div className={classes.row}>
        <div className={classes.column1}>
          <div className={classes.card1}>
            <p className={classes.date}>
              {shift.date}
              <i class="bi bi-sun"></i>
            </p>
            <p className={classes.task}>
              {shift.shift}
              <br />
              {shift.task}
            </p>
            <p className={classes.salary}>{shift.salary}</p>
          </div>
        </div>
        <div className={classes.column2}>
          <div className={classes.card2}>
            <p className={classes.hospital}>{shift.hospital}</p>
            <p className={classes.star}>
              <i class="fa fa-star fa_custom"></i>
              <i class="fa fa-star fa_custom"></i>
              <i class="fa fa-star fa_custom"></i>
              <i class="fa fa-star fa_custom"></i>
              <i class="fa fa-star fa_custom"></i>
              <button className={classes.apply}>APPLY</button>
            </p>
            <p className={classes.location}>
              {shift.street}
              <br />
              {shift.location}
            </p>
          </div>
        </div>
      </div>
      <div className={classes.row}>
        <div className={classes.column1}>
          <div className={classes.card1}>
            <p className={classes.date}>
              {shift1.date}
              <i class="bi bi-sun"></i>
            </p>
            <p className={classes.task}>
              {shift1.shift}
              <br />
              {shift1.task}
            </p>
            <p className={classes.salary}>{shift1.salary}</p>
          </div>
        </div>
        <div className={classes.column2}>
          <div className={classes.card2}>
            <p className={classes.hospital}>{shift1.hospital}</p>
            <p className={classes.star}>
              <i class="fa fa-star fa_custom"></i>
              <i class="fa fa-star fa_custom"></i>
              <i class="fa fa-star fa_custom"></i>
              <i class="fa fa-star fa_custom"></i>
              <i class="fa fa-star fa_custom"></i>
              <button className={classes.apply}>APPLY</button>
            </p>
            <p className={classes.location}>
              {shift1.street}
              <br />
              {shift1.location}
            </p>
          </div>
        </div>
      </div>
      <div className={classes.row}>
        <div className={classes.column1}>
          <div className={classes.card1}>
            <p className={classes.date}>
              {shift2.date}
              <i class="bi bi-sun"></i>
            </p>
            <p className={classes.task}>
              {shift2.shift}
              <br />
              {shift2.task}
            </p>
            <p className={classes.salary}>{shift2.salary}</p>
          </div>
        </div>
        <div className={classes.column2}>
          <div className={classes.card2}>
            <p className={classes.hospital}>{shift2.hospital}</p>
            <p className={classes.star}>
              <i class="fa fa-star fa_custom"></i>
              <i class="fa fa-star fa_custom"></i>
              <i class="fa fa-star fa_custom"></i>
              <i class="fa fa-star fa_custom"></i>
              <i class="fa fa-star fa_custom"></i>
              <button className={classes.apply}>APPLY</button>
            </p>
            <p className={classes.location}>
              {shift2.street}
              <br />
              {shift2.location}
            </p>
          </div>
        </div>
      </div>
      <div className={classes.row}>
        <div className={classes.column1}>
          <div className={classes.card1}>
            <p className={classes.date}>
              {shift3.date}
              <i class="bi bi-sun"></i>
            </p>
            <p className={classes.task}>
              {shift3.shift}
              <br />
              {shift3.task}
            </p>
            <p className={classes.salary}>{shift3.salary}</p>
          </div>
        </div>
        <div className={classes.column2}>
          <div className={classes.card2}>
            <p className={classes.hospital}>{shift3.hospital}</p>
            <p className={classes.star}>
              <i class="fa fa-star fa_custom"></i>
              <i class="fa fa-star fa_custom"></i>
              <i class="fa fa-star fa_custom"></i>
              <i class="fa fa-star fa_custom"></i>
              <i class="fa fa-star fa_custom"></i>
              <button className={classes.apply}>APPLY</button>
            </p>
            <p className={classes.location}>
              {shift3.street}
              <br />
              {shift3.location}
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default InvitedCard2;
