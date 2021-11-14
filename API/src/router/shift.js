const express = require("express");
const router = express.Router();
const data = require("../../data.json");
router.get("/", async (req, res) => {
  res.send(data);
  console.log("send successfully");
});

// const express = require("express");
// const router = express.Router();
// const mongodb = require("mongodb");
// const assert = require("assert");

// const dotenv = require("dotenv");
// const MongoClient = mongodb.MongoClient;

// dotenv.config();
// console.log("here");

// router.get("/shifts", async (req, res) => {
//   console.log("here1");
//   var data;
//   MongoClient.connect(process.env.MONGODB_URL, (err, db) => {
//     assert.equal(null, err);
//     console.log("here2");

//     var cursor = db.db("Shift");
//     cursor
//       .collection("Invited")
//       .find()
//       .toArray((result, err) => {
//         if (err) {
//           console.log(err);
//         }
//         console.log(result);
//         data = result;
//         // res.send(result);
//         db.close();
//       });
//   });
//   res.send(data);
// });

module.exports = router;
