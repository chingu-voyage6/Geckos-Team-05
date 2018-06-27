var express = require("express");
var router = express.Router();
var TestItem = require("../models/test");

router.get("/api", (req, res) => {
  TestItem.find({})
  .then((data) => {
    res.send({data: data});
    console.log(data);
  })
  .catch((err) => {
    res.status(500).json({ success: false, msg: `Something went wrong. ${err}` });
  });
});

module.exports = router;
