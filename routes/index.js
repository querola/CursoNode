const express = require("express");
const router = express.Router();
const proyectosController = require('../controllers/proyectosController');
module.exports = function () {
  //ruta para el home
  router.use("/", proyectosController.proyectosHome);
  router.use("/", (req, res) => {
    res.send('Nosotros');
  });
  return router;
}
