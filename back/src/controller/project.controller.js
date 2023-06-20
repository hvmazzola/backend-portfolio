const projectService = require("../service/project.service");
const ferramentaService = require("../service/ferramenta.service");


const findProjectByIdController = async (req, res) => {
    try{
        const project = await projectService.findProjectByIdService(req.params.id);

        if(!project){
            return res.status(404).send({ message: "Project não encontrada. Tente novamente."});
        }

        return res.status(200).send(project);

    }catch (err){
        if(err.kind == "ObjectId"){
            console.log(err.kind == "ObjectId");
            return res.status(400).send({ message: `ID informado está incorreto. Tente novamente.`});
        }

        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: "Aconteceu um erro inesperado :( Tente novamente!"});
        
    }
};

const findAllProjectsController = async (req, res) => {
    try{
        return res.status(200).send(await projectService.findAllProjectsService(req.query.limit, req.query.offset));
    }catch (err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: "Aconteceu um erro inesperado :( Tente novamente!"});
    }
};

const createProjectController = async (req, res) => {
    try{
        const body = {
            ...req.body,
            userId: req.userId
        }

        return res.status(201).send(await projectService.createProjectService(body));

    }catch (err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: "Aconteceu um erro inesperado :( Tente novamente!" });
    }
};

const updateProjectController = async (req, res) => {
    try{
        const project = await projectService.findProjectByIdService(req.params.id);

        if(!project){
            return res.status(404).send({ message: "Project não encontrada. Tente novamente."});
        }

        return res.status(200).send(await projectService.updateProjectService(req.params.id, req.body));

    }catch (err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: "Aconteceu um erro inesperado :( Tente novamente!"});
    }
};

const removeProjectController = async (req, res) => {
    try{

        const deletedProject = await projectService.removeProjectService(req.params.id);

        if(deletedProject == null){
            return res.status(400).send({ message: "Project não encontrada. Tente novamente." });
        } else {
            return res.status(200).send({ message: "Sucesso! Usuário deletado." });            
        };

    }catch (err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: "Aconteceu um erro inesperado :( Tente novamente!"});
    }
};

const addFerramentaProjectController = async (req, res) => {
    try{
        const project = await projectService.findProjectByIdService(req.params.id);

        if(!project){
            return res.status(404).send({ message: "Project não encontrada. Tente novamente."});
        }

        let ferramenta = await ferramentaService.findFerramentaByIdService(req.body._id);

        if(!ferramenta){
            return res.status(404).send({ message: "Ferramenta não encontrado. Tente novamente."});
        }

        ferramenta = await projectService.addFerramentaProjectService(req.params.id, req.body);

        return res.status(200).send({ message: "Ferramenta adicionada com sucesso!" });

    }catch (err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: "Aconteceu um erro inesperado :( Tente novamente!"});
    }
};

const removeFerramentaProjectController = async (req, res) => {
    try{
        const project = await projectService.findProjectByIdService(req.params.id);

        if(!project){
            return res.status(404).send({ message: "Project não encontrada. Tente novamente."});
        }

        const ferramenta = await projectService.removeFerramentaProjectService(req.params.id, req.body);

        let found = false;

        ferramenta.value.ferramentas.map((valor, chave) => {
            if(valor._id == req.body._id){
                found = true;
            }
        });

        if(found){
            return res.status(200).send({ message: "Ferramenta removido com sucesso!" });
        } else {
            return res.status(400).send({ message: "Ferramenta não encontrado. Tente novamente." });
        };

    }catch (err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: "Aconteceu um erro inesperado :( Tente novamente!"});
    }
};

module.exports = {
    findProjectByIdController,
    findAllProjectsController,
    createProjectController,
    updateProjectController,
    removeProjectController,
    addFerramentaProjectController,
    removeFerramentaProjectController
}