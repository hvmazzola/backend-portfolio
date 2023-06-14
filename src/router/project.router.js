const express = require("express");
const router = express.Router();
const projectController = require("../controller/project.controller");
const authMiddleware = require("../middleware/auth.middleware");
const { validaIdParams, validaIdBody, validaProject, validaFerramentasProject } = require("../middleware/validacao.middleware");
const paginacao = require("../middleware/paginacao.middleware");

// rotas get
router.get("/findById/:id", authMiddleware, validaIdParams, projectController.findProjectByIdController);
router.get("/findAll", authMiddleware, paginacao, projectController.findAllProjectsController);

// rotas post
router.post("/create", authMiddleware, validaProject, projectController.createProjectController);
router.post("/addFerramenta/:id", authMiddleware, validaIdParams, validaFerramentasProject, validaIdBody, projectController.addFerramentaProjectController);

// rotas put
router.put("/update/:id", authMiddleware, validaIdParams, validaProject, projectController.updateProjectController);

// rotas delete
router.delete("/remove/:id", authMiddleware, validaIdParams, projectController.removeProjectController);
router.delete("/removeFerramenta/:id", authMiddleware, validaIdParams, validaFerramentasProject, validaIdBody, projectController.removeFerramentaProjectController);

module.exports = router;