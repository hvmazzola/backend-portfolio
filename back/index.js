const express = require("express");
require("dotenv").config();
const cors = require("cors");

const connectToDatabase = require("./src/database/database"); // arquivo de conexão com o banco
const usuario = require("./src/router/usuario.router"); // arquivo de rotas do usuário
const auth = require("./src/router/auth.router"); // arquivo de rotas de autenticação
const ferramenta = require("./src/router/ferramenta.router"); // arquivo de rotas dos ferramentaes
const project = require("./src/router/project.router"); // arquivo de rotas das projects
const docs = require("./src/router/docs.router"); // arquivo de rotas do swagger docs



const app = express();

const port = 3000;

app.use(express.json());
app.use(cors(
    {
        origin: [
            "http://localhost:3001",
            "http://localhost:3002",
        ],
        methods: [
            "GET",
            "POST",
            "PUT",
            "PATCH",
            "DELETE"
        ]
    }
));

connectToDatabase(); // conectanco com o banco

app.use("/usuario", usuario); // chamando rotas do usuário
app.use("/auth", auth); // chamando rotas de autenticação
app.use("/ferramenta", ferramenta); // chamando rotas dos ferramentaes
app.use("/project", project); // chamando rotas das projects
app.use("/docs", docs); // chamando rotas do swagger docs

app.get ("/", (req, res) => {
    res.send({
        message: "Seja bem-vindo ao meu portfólio!"
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});