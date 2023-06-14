const jwt = require("jsonwebtoken");
const { findUserByIdService } = require("../service/usuario.service");

module.exports = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader){
        return res.status(401).send({ message: "O token não foi informado. Tente novamente!"});
    }

    const parts = authHeader.split(" "); //divisão do ["Bearer, <token>"]

    if(parts.length !== 2){
        return res.status(401).send({ message: "Token inválido. Tente novamente!"});
    }

    const [schema, token] = parts;

    if(!/^Bearer$/i.test(schema)){
        return res.status(401).send({ message: "O token não foi formulado corretamente. Tente novamente!"});
    }

    jwt.verify(token, process.env.SECRET, async (err, decoded) => {
        if(err){
            return res.status(500).send({ message: "Token inválido. Tente novamente!"});
        }

        const user = await findUserByIdService(decoded.id);

        if((!user) || (!user.id)){
            return res.status(401).send({ message: "Token inválido. Tente novamente!"});
        }

        req.userId = decoded.id;

        return next();
    })
}