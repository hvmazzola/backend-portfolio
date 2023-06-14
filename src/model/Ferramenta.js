const mongoose = require ("mongoose");

const FerramentaSchema = new mongoose.Schema({
    nome: { type: String, unique: true, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "usuarios" },
    createdAt: { type: Date, required: true, default: Date.now() },
});

const Ferramenta = mongoose.model("ferramentas", FerramentaSchema);

module.exports = Ferramenta;