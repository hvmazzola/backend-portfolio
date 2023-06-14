const mongoose = require ("mongoose");

const ProjectSchema = new mongoose.Schema({
    ferramentas: [
        { 
            _id: { type: mongoose.Schema.Types.ObjectId, required: true, unique: true, ref: "ferramentas" },
            nome: { type: String, required: true, unique: true },
            createdAt: { type: Date, required: true, default: Date.now() },
        }
    ],
    nome: { type: String, required: true, unique: true },
    descricao: { type: String, required: true },
    linguagem: { type: String, required: true },
    imagem: { type: String },
    userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "usuarios" },
    createdAt: { type: Date, required: true, default: Date.now() },
});

const Project = mongoose.model("projects", ProjectSchema);

module.exports = Project;