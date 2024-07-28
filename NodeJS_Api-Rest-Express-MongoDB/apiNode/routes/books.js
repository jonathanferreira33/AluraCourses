var express = require('express');
var router = express.Router();

const books = [
    {id: 1, "title": "Box Trilogia O Senhor dos Anéis"},
    {id: 2, "title": "O Hobbit + pôster"},
    {id: 3, "title": "A Game of Thrones Leather-Cloth Boxed Set"},
    {id: 4, "title": "Box As Crônicas de Gelo e Fogo - 5 Volumes"},
    {id: 5, "title": "The Witcher - Box"},
  ]

  /* GET books listing. */
  router.get('/', (req, res) => {
    res.status(200).json(books);
  })
  
  // POST
  router.post('/', (req, res) => {
    books.push(req.body);
    res.status(201).send('Item registered successfully');
  })
  
module.exports = router;
