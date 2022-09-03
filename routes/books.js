const express = require("express");
const router = express.Router();
const {books} = require("../data/books.json");
const {users} = require("../data/users.json");
const { getAllBooks, getSingleBookById, getAllIssuedBook } = require("../controllers/book-controller");
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

router.post("/",(req, res)=>{
    const {data} = req.body;
    
    if(!data){
     return res.status(404).json({
        success:false,
        message : "no data provided"
     });
    }
    const book = books.find((each)=> each.id === data.id);
    if(book){
        return res.status(404).json({
            success : false,
            message : "The usr already exists with this id"
        });
    }

    const allBooks = [...books,data];
    return res.status(200).json({
        success:true,
        message: "Data added successfully",
        data : allBooks
    })
});

/**
 * Route: /books/:id
 * Method: PUT
 * Description: Update book by ID
 * Access: Public
 * Parameters: id
 * Data : author, name,genre, price, publisher, id, (as required)
 */
router.put("/:id",(req,res)=>{
    const {id} = req.params;
    const {data} = req.body;
    
    const user = users.find((each)=> each.id===id);
    if (!user){
        return res.status(404).json({
            success : false,
            message :"Book Does not exists"
        });
    }
    const updatedbooks = books.map((each)=>{
        if(each.id === id){
            return {
                ...each,
                ...data
            }
        }
        return each; 
    });
    return res.status(200).json({
        message : true,
        data : updatedbooks
    });
});

module.exports = router;