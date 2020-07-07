const express = require("express");
const router = express.Router();

module.exports = function () {
  //ruta para el home
  router.use("/", (req, res) => {
    res.send('index');
  });
  router.use("/", (req, res) => {
    res.send('Nosotros');
  });
  return router;
}
