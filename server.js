
const express = require("express");
const app = express();
const PORT = 3000;
app.use(express.json());
let books = [];
let nextId = 1;
app.post("/api/books", (req, res) => {
    const { title, author, genre, totalCopies } = req.body;
    if (!title || !author) {
        return res.status(400).json({
            message: "Title and author are required"
        });
    }
    const copies = totalCopies === undefined ? 1 : totalCopies;
    if (!Number.isInteger(copies) || copies < 1) {
        return res.status(400).json({
            message: "Total copies must be a positive integer"
        });
    }
    const newBook = {
        id: nextId++,
        title: title,
        author: author,
        genre: genre || "Unknown",
        totalCopies: copies,
        availableCopies: copies
    };
    books.push(newBook);

    res.status(201).json({
        message: "Book added successfully",
        book: newBook
    });
});
app.get("/api/books", (req, res) => {
    if (books.length === 0) {
        return res.status(200).json({
            message: "No books available",
            books: []
        });
    }
    res.status(200).json(books);
});
app.get("/api/books/:id", (req, res) => {
    const id = Number(req.params.id);
    const book = books.find(b => b.id === id);
    if (!book) {
        return res.status(404).json({
            message: "Book not found"
        });
    }
    res.status(200).json(book);
});
app.put("/api/books/:id", (req, res) => {
    const id = Number(req.params.id);
    const book = books.find(b => b.id === id);
    if (!book) {
        return res.status(404).json({
            message: "Book not found"
        });
    }
    const { title, author, genre, totalCopies } = req.body;
    if (title !== undefined) {
        if (typeof title !== "string" || !title.trim()) {
            return res.status(400).json({
                message: "Invalid title"
            });
        }
        book.title = title.trim();
    }
    if (author !== undefined) {
        if (typeof author !== "string" || !author.trim()) {
            return res.status(400).json({
                message: "Invalid author"
            });
        }
        book.author = author.trim();
    }
    if (genre !== undefined) {
        if (typeof genre !== "string" || !genre.trim()) {
            return res.status(400).json({
                message: "Invalid genre"
            });
        }
        book.genre = genre.trim();
    }
    if (totalCopies !== undefined) {
        const issuedCopies = book.totalCopies - book.availableCopies;
        if (!Number.isInteger(totalCopies) ||
            totalCopies < 1 ||
            totalCopies < issuedCopies) {
            return res.status(400).json({
                message: "Invalid total copies"
            });
        }
        book.totalCopies = totalCopies;
        book.availableCopies = totalCopies - issuedCopies;
    }
    res.status(200).json({
        message: "Book updated successfully",
        book: book
    });
});
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
