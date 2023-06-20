const userService = require("../service/usuario.service");


const findUserByIdController = async (req, res) => {
    try{
        const user = await userService.findUserByIdService(req.params.id);

        if(!user){
            return res.status(404).send({ message: "Usuário não encontrado. Tente novamente."});
        }

        return res.status(200).send(user);

    }catch (err){
        if(err.kind == "ObjectId"){
            console.log(err.kind == "ObjectId");
            return res.status(400).send({ message: `ID informado está incorreto. Tente novamente.`});
        }

        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: "Aconteceu um erro inesperado :( Tente novamente!"});
        
    }
};

const findAllUsersController = async (req, res) => {
    try{
        return res.status(200).send(await userService.findAllUsersService(req.query.limit, req.query.offset));
    }catch (err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: "Aconteceu um erro inesperado :( Tente novamente!"});
    }
};

const createUserController = async (req, res) => {
    try{
        const body = req.body;

        return res.status(201).send(await userService.createUserService(body));

    }catch (err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: "Aconteceu um erro inesperado :( Tente novamente!" });
    }
};

const updateUserController = async (req, res) => {
    try{
        const user = await userService.findUserByIdService(req.params.id);

        if(!user){
            return res.status(404).send({ message: "Usuário não encontrado. Tente novamente."});
        }
        return res.status(200).send(await userService.updateUserService(req.params.id, req.body));
    }catch (err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: "Aconteceu um erro inesperado :( Tente novamente!"});
    }
};

const removeUserController = async (req, res) => {
    try{

        const deletedUser = await userService.removeUserService(req.params.id);

        if(deletedUser == null){
            return res.status(400).send({ message: "Usuário não encontrado. Tente novamente." });
        } else {
            return res.status(200).send({ message: "Sucesso! Usuário deletado." });            
        };

    }catch (err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: "Aconteceu um erro inesperado :( Tente novamente!"});
    }
};

module.exports = {
    findUserByIdController,
    findAllUsersController,
    createUserController,
    updateUserController,
    removeUserController
}