import express, { Router } from 'express';
import Book from '../models/Book';

const router = new Router();

router.post('/add', express.urlencoded({ extended: true }), (req, res) => {
  const newBook = new Book(req.body);
  newBook.save(err => err ? res.send(err) : res.json({ "message": "Book successfully added to Simplon Books" }));
});

router.get('/', (req, res) => {
  Book.find({}, (err, books) => err ? res.send(err) : res.json(books));
});

router.put('/:id/update', express.urlencoded({ extended: true }), (req, res) => {
  Book.findByIdAndUpdate(req.params.id, req.body, (err, book) =>
    err
    ? res.send(err)
    : res.json({ "message": `Book ${book.titre} successfully updated` })
  );
});

router.get('/:id/delete', (req, res) => {
  Book.findByIdAndRemove(req.params.id, (err, book) => 
    err 
    ? res.send(err) 
    : res.json({ "message": `Book ${book.titre} successfully removed from Simplon Books` })
  );
})

export default router;