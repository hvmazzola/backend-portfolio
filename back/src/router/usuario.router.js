const express = require("express");
const router = express.Router();
const usuarioController = require("../controller/usuario.controller");
const authMiddleware = require("../middleware/auth.middleware");
const { validaIdParams, validaUsuario } = require("../middleware/validacao.middleware");
const paginacao = require("../middleware/paginacao.middleware");

// rotas get
router.get("/findById/:id", authMiddleware, validaIdParams, usuarioController.findUserByIdController);
router.get("/findAll", authMiddleware, paginacao, usuarioController.findAllUsersController);

// rotas post
router.post("/create", validaUsuario, usuarioController.createUserController);

// rotas put
router.put("/update/:id", authMiddleware, validaIdParams, validaUsuario, usuarioController.updateUserController);

// rotas delete
router.delete("/remove/:id", authMiddleware, validaIdParams, usuarioController.removeUserController);

module.exports = router;