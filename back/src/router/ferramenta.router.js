const express = require("express");
const router = express.Router();
const ferramentaController = require("../controller/ferramenta.controller");
const authMiddleware = require("../middleware/auth.middleware");
const { validaIdParams, validaFerramenta } = require("../middleware/validacao.middleware");
const paginacao = require("../middleware/paginacao.middleware");

// rotas get
router.get("/findById/:id", authMiddleware, validaIdParams, ferramentaController.findFerramentaByIdController);
router.get("/findAll", authMiddleware, paginacao, ferramentaController.findAllFerramentasController);

// rotas post
router.post("/create", authMiddleware, validaFerramenta, ferramentaController.createFerramentaController);

// rotas put
router.put("/update/:id", authMiddleware, validaIdParams, validaFerramenta, ferramentaController.updateFerramentaController);

// rotas delete
router.delete("/remove/:id", authMiddleware, validaIdParams, ferramentaController.removeFerramentaController);

module.exports = router;