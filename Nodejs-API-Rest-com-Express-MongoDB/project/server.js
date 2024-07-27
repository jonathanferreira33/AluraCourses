const http = require("http");
const port = 4000;

const route = {
    '/': 'Curso Node',
    '/livros': 'Pagina Livros',
    '/autores': 'Lista autores',
    '/editora': 'Pagina Editora',
    '/sobre': 'Informação sobre o projeto' 
} 

const serve = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(route[req.url]);
})

serve.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`)
})