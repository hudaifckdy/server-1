const express = require("express");
const { login, register } = require("../mongodb");

const router = express.Router();

router.post("/login", (req, res) => {
  console.log(req.body);
  login(req.body).then((data) => {
    res.json(data);
  });
});

router.get("/", (req, res) => {
  res.end("hiii");
});

router.post("/signup",(req,res) => {
  register(req.body).then((values) => {
    res.json(values);
  })
})

module.exports = router;
