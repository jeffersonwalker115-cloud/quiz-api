const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let resultados = [];

app.post("/salvar-resultado", (req, res) => {
  const { nome, pontos } = req.body;

  if (!nome) {
    return res.status(400).json({ erro: "Nome é obrigatório" });
  }

  const novoResultado = {
    nome,
    pontos,
    data: new Date().toLocaleString("pt-BR")
  };

  resultados.push(novoResultado);
  res.status(201).json({ mensagem: "Resultado salvo com sucesso!" });
});

app.get("/meu-ranking-secreto", (req, res) => {
  res.json(resultados);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log
