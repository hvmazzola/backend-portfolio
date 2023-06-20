const objectId = require("mongoose").Types.ObjectId;

const validaUsuario = (req, res, next) => {
    let erros = [];

    if(req.body.nome == null){
        erros.push("nome");
    }

    if(req.body.email == null){
        erros.push("email");
    }

    if(req.body.senha == null){
        erros.push("senha");
    }

    if(erros.length == 0) {
        return next();
    } else if(erros.length == 1) {
        return res.status(400).send({ message: `O campo ${erros} precisa ser preenchido. Tente novamente!`});
    } else {
        return res.status(400).send({ message: `Os campos ${erros} precisam ser preenchidos. Tente novamente!`});
    };
};

const validaProject = (req, res, next) => {
    let erros = [];

    if(req.body.nome == null){
        erros.push("nome");
    }

    if(req.body.descricao == null){
        erros.push("descricao");
    }

    if(req.body.linguagem == null){
        erros.push("linguagem");
    }

    if(erros.length == 0) {
        return next();
    } else if(erros.length == 1) {
        return res.status(400).send({ message: `O campo ${erros} precisa ser preenchido. Tente novamente!`});
    } else {
        return res.status(400).send({ message: `Os campos ${erros} precisam ser preenchidos. Tente novamente!`});
    };
};

const validaFerramentasProject = (req, res, next) => {

    if(req.body._id == null){
        return res.status(400).send({ message: "O campo '_id' precisa ser preenchido. Tente novamente!"});
    }
    
    return next();
};

const validaFerramenta = (req, res, next) => {
    let erros = [];

    if(req.body.nome == null){
        erros.push("nome");
    }

    if(erros.length == 0) {
        return next();
    } else {
        return res.status(400).send({ message: `O campo ${erros} precisa ser preenchido. Tente novamente!`});
    };
};

const validaAddProject = (req, res, next) => {

    if(req.body._id == null){
        return res.status(400).send({ message: "O campo '_id' precisa ser preenchido. Tente novamente!"});
    }
    
    return next();
    
};

const validaIdParams = (req, res, next) => {
    if(objectId.isValid(req.params.id)){
        return next();
    }else{
        return res.status(400).send({ message: `O ID que foi passado não corresponde aos podrões necessários. Tente novamente!`});
    }    
};

const validaIdBody = (req, res, next) => {

    if(objectId.isValid(req.body._id)){
        return next();
    }else{
        return res.status(400).send({ message: `O ID que foi passado não corresponde aos padrões necessários. Tente novamente!`});
    }    
};

const validaLogin = (req, res, next) => {

    let erros = [];

    if(req.body.email == null){
        erros.push("email");
    }

    if(req.body.senha == null){
        erros.push("senha");
    }

    if(erros.length == 0) {
        return next();
    } else if(erros.length == 1) {
        return res.status(400).send({ message: `O campo ${erros} precisa ser preenchido. Tente novamente!`});
    } else {
        return res.status(400).send({ message: `Os campos ${erros} precisam ser preenchidos. Tente novamente!`});
    }; 
};

module.exports = {
    validaUsuario,
    validaProject,
    validaFerramentasProject,
    validaFerramenta,
    validaAddProject,
    validaIdParams,
    validaIdBody,
    validaLogin
};