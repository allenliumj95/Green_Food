import { createStore } from "redux";

//I tried to create Redux store, but the data tranfomation had some problem. Due to limited time, I chose the another way
//to fetch data from the backend server directly.
//Obtain data from backend
const fetchData = async () => {
  const url = "http://localhost:8000";
  const res = await fetch(url);
  const data = await res.json();
  const invitedData = data.filter((shift) => shift.state === "invited");
  return invitedData;
};
let data = fetchData();

const invitedReducer = (state = { invitedShift: 0 }) => {
  state.invitedShift = data;
  return state;
};

const store = createStore(invitedReducer);

export default store;
