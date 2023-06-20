const Project = require("../model/Project");

const findProjectByIdService = (id) => {
    return Project.findById(id);
};

const findAllProjectsService = (limit, offset) => {
    return Project.find().limit(limit).skip(offset);
};

const createProjectService = (body) => {
    return Project.create(body);
};

const updateProjectService = (id, body) => {
    return Project.findByIdAndUpdate(id, body, { returnDocument: "after" });
};

const removeProjectService = (id) => {
    return Project.findByIdAndRemove(id);
};

const addFerramentaProjectService = (id, ferramenta) => {
    return Project.findOneAndUpdate(
        {
            _id: id,
        },
        {
            $push: {
                ferramentas:{
                    _id: ferramenta._id,
                    nome: ferramenta.nome
                },
            },
        },
        {
            rawResult: true,
        }
    );
};

const removeFerramentaProjectService = (id, ferramenta) => {
    return Project.findOneAndUpdate(
        {
            _id: id,
        },
        {
            $pull: {
                ferramentas: {
                    _id: ferramenta._id,
                    nome: ferramenta.nome
                },
            },
        },
        {
            rawResult: true,
        }
    );
};

module.exports = {
    findProjectByIdService,
    findAllProjectsService,
    createProjectService,
    updateProjectService,
    removeProjectService,
    addFerramentaProjectService,
    removeFerramentaProjectService
}