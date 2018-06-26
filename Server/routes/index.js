var express = require("express");
var router = express.Router();

router.get("/api", (req, res) => {
  res.send({ express: "Hello From Express!" });
});

module.exports = router;
