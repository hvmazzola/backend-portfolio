const authService = require("../service/auth.service");
const bcrypt = require("bcrypt");

const loginController = async (req, res) => {
    const {email, senha} = req.body;

    const user = await authService.loginService(email);

    const id = user._id

    if(!user){
        return res.status(400).send({ message: "Usuário não encontrado. Tende novamente"});
    }

    const testeSenha = await bcrypt.compare(senha, user.senha);

    if(!testeSenha){
        return res.status(400).send({ message: "Senha inválida. Tende novamente"});
    }

    const token = authService.generateToken(user.id);

    return res.status(200).send({
        email,
        token,
        id        
    });
}

module.exports = { loginController };