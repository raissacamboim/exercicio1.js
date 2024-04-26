// Importa o Express
const express = require('express');

// Cria uma aplicação Express
const app = express();

// Middleware para analisar JSON
app.use(express.json());

// Middleware para dados de formulário
app.use(express.urlencoded({ extended: true }));

// Servindo arquivos estáticos
app.use(express.static('public'));

// Rota de login básica (GET)
app.get('/login', (req, res) => {
  res.sendFile('index.html', { root: './public' });
});

// Simples autenticação de login (POST)
app.post('/login', (req, res) => {
  const { username, password } = req.body; // Aqui você implementará a lógica de validação
  if (username === "admin" && password === "password") {
    res.send("Login bem-sucedido!");
  } else {
    res.send("Falha no Login!");
  }
});

app.listen(PORT, () => console.log(`Server rodando em http://localhost:${PORT}`));