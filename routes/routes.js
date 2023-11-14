const express = require("express");
const router = express.Router();

const userController = require("../controllers/usuarioController"); // Importa o controlador de usuários

// Rotas para a entidade "usuario"
router.get("/data", userController.getAllUsuarios);
router.post("/data", userController.createUsuario);
router.put("/data/:cpf", userController.updateUsuario);
router.delete("/data/:cpf", userController.deleteUsuario);

module.exports = router;
