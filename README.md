# Library Management System REST API
## Student Details
- **Student Name:** Abhigyan Rai
- **Roll Number:** 2500320100031
- **Branch:** CSE
- **Section:** CSE-11
## Project Title
Library Management System
## Problem Statement
Develop a Library Management System REST API using Node.js and Express.js. The application allows users to add, view, update, delete, and search books, and issue or return book copies.
## Technologies Used
- Node.js
- Express.js
- JavaScript
- REST API
- In-memory JavaScript Array
- Git
- GitHub
## Project Structure
FSD-Mid_term_1/
├── package.json
├── package-lock.json
├── server.js
├── README.md
└── .gitignore
## Installation and Instructions
### 1. Clone the repository
git clone <your-repository-url>
### 2. Navigate to the project
cd FSD-Mid_term_1
### 3. Install dependencies
npm install
### 4. Start the server
npm start
The server runs on port 3000:
http://localhost:3000
## Implemented API Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/books | Add a new book |
| GET | /api/books | Retrieve all books |
| GET | /api/books/:id | Retrieve book by ID |
| PUT | /api/books/:id | Update book details |
| DELETE | /api/books/:id | Delete a book |
| GET | /api/books/search?q=keyword | Search books |
| POST | /api/books/:id/issue | Issue a book copy |
| POST | /api/books/:id/return | Return a book copy |
## Features
- Add books
- View all books
- View a specific book
- Update book details
- Delete books
- Search books by title, author, or genre
- Issue book copies
- Return book copies
- Handle errors and invalid requests
## Data Storage
The application uses an in-memory JavaScript array to store book details. No database is used. All data resets when the server restarts.
## Git Commit
