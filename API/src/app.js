const cors = require("cors");
const express = require("express");
const app = express();
const useRouter = require("./router/shift");

app.use(cors());
app.use(express.json());
app.use(useRouter);

// app.use("/shifts", useRouter, (req, res) => {
//   res.send(data);
// });
// app.use("*", (req, res) => res.status(404).json({ error: "not found" }));

module.exports = app;
