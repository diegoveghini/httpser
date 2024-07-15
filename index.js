const http = require('http');

const server = http.createServer((req, res) => {
  // Lógica para tratar as requisições
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});