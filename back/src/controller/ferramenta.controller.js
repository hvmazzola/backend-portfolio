const ferramentaService = require("../service/ferramenta.service");


const findFerramentaByIdController = async (req, res) => {
    try{
        const ferramenta = await ferramentaService.findFerramentaByIdService(req.params.id);

        if(!ferramenta){
            return res.status(404).send({ message: "Ferramenta não encontrada. Tente novamente."});
        }

        return res.status(200).send(ferramenta);

    }catch (err){
        if(err.kind == "ObjectId"){
            console.log(err.kind == "ObjectId");
            return res.status(400).send({ message: `ID informado está incorreto. Tente novamente.`});
        }

        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: "Aconteceu um erro inesperado :( Tente novamente!"});
        
    }
};

const findAllFerramentasController = async (req, res) => {
    try{
        return res.status(200).send(await ferramentaService.findAllFerramentasService(req.query.limit, req.query.offset));
    }catch (err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: "Aconteceu um erro inesperado :( Tente novamente!"});
    }
};

const createFerramentaController = async (req, res) => {
    try{
        const body = {
            ...req.body,
            userId: req.userId
        }

        return res.status(201).send(await ferramentaService.createFerramentaService(body));

    }catch (err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: "Aconteceu um erro inesperado :( Tente novamente!" });
    }
};

const updateFerramentaController = async (req, res) => {
    try{
        const ferramenta = await ferramentaService.findFerramentaByIdService(req.params.id);

        if(!ferramenta){
            return res.status(404).send({ message: "Ferramenta não encontrada. Tente novamente."});
        }
        
        return res.status(200).send(await ferramentaService.updateFerramentaService(req.params.id, req.body));

    }catch (err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: "Aconteceu um erro inesperado :( Tente novamente!"});
    }
};

const removeFerramentaController = async (req, res) => {
    try{

        const deletedFerramenta = await ferramentaService.removeFerramentaService(req.params.id);

        if(deletedFerramenta == null){
            return res.status(400).send({ message: "Ferramenta não encontrado. Tente novamente." });
        } else {
            return res.status(200).send({ message: "Sucesso! Ferramenta deletado." });            
        };

    }catch (err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: "Aconteceu um erro inesperado :( Tente novamente!"});
    }
};

module.exports = {
    findFerramentaByIdController,
    findAllFerramentasController,
    createFerramentaController,
    updateFerramentaController,
    removeFerramentaController
}