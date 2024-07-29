var express = require('express');
var router = express.Router();

const books = [
  { id: 1, "title": "Box Trilogia O Senhor dos Anéis" },
  { id: 2, "title": "O Hobbit + pôster" },
  { id: 3, "title": "A Game of Thrones Leather-Cloth Boxed Set" },
  { id: 4, "title": "Box As Crônicas de Gelo e Fogo - 5 Volumes" },
  { id: 5, "title": "The Witcher - Box" },
]

/* GET books listing. */
router.get('/', (req, res) => {
  res.status(200).json(books);
})

router.get('/:id', (req, res) => {

  var itemIndex = getBook(req.params.id);

  try {
    res.status(200).json(books[itemIndex]);
  } catch {
    res.status(204).send("Livro não encontrado")
  }
})

// POST
router.post('/', (req, res) => {
  books.push(req.body);
  res.status(201).send('Item registered successfully');
})

//PUT
router.put('/edit/:id', (req, res) => {
  var itemIndex = getBook(req.params.id);
  books[itemIndex].title = req.body.title;
  res.status(201).json(books);
  return;
})

//DELETE
router.delete('/delete/:id', (req, res) => {
  let { id } = req.params; // Atribuição via desestruturação (destructuring assignment) 
  var itemIndex = getBook(req.params.id);
  var bookName = books[itemIndex].title;
  books.splice(itemIndex, 1);
  res.status(202).send(`Livro ${bookName} excluído com sucesso`);
  return;
})

function getBook(id) {
  return books.findIndex(book => book.id == id);
}

module.exports = router;
