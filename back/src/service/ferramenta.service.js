const Ferramenta = require("../model/Ferramenta");

const findFerramentaByIdService = (id) => {
    return Ferramenta.findById(id);
};

const findAllFerramentasService = (limit, offset) => {
    return Ferramenta.find().limit(limit).skip(offset);
};

const createFerramentaService = (body) => {
    return Ferramenta.create(body);
};

const updateFerramentaService = (id, body) => {
    return Ferramenta.findByIdAndUpdate(id, body, { returnDocument: "after" });
};

const removeFerramentaService = (id) => {
    return Ferramenta.findByIdAndRemove(id);
};

module.exports = {
    findFerramentaByIdService,
    findAllFerramentasService,
    createFerramentaService,
    updateFerramentaService,
    removeFerramentaService
}