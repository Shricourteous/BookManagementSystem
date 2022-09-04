const express = require("express");
const router = express.Router();
const {books} = require("../data/books.json");
const {users} = require("../data/users.json");
const { getAllBooks, getSingleBookById, getAllIssuedBook, addNewBook,  updateBookById, getSingleBookByName } = require("../controllers/book-controller");
// const app = express();

/**
 * Route: /books
 * Method: GET
 * Description: Get all books
 * Access: Public
 * Parameters: none
 */
router.get("/",getAllBooks);

/**
 * Route: /books
 * Method: GET
 * Description: Get specific book by id
 * Access: Public
 * Parameters: id
 */
router.get("/:id",getSingleBookById);
router.get("/getbook/name/:name",getSingleBookByName);


/**
 * Route: /books/issued/by-user
 * Method: GET
 * Description: Get all issued books
 * Access: Public
 * Parameters: none
 */
router.get("/issued/by-user",getAllIssuedBook);

/**
 * Route: /books/issued/by-user
 * Method: POST
 * Description: Create new books
 * Access: Public
 * Parameters: none
 * Data : author, name,genre, price, publisher, id(should be in double quatation)
 */

router.post("/",addNewBook);

/**
 * Route: /books/:id
 * Method: PUT
 * Description: Update book by ID
 * Access: Public
 * Parameters: id
 * Data : author, name,genre, price, publisher, id, (as required)
 */
router.put("/:id",updateBookById);

module.exports = router;