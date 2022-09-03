const express = require("express");
const router = express.Router();
const {books} = require("../data/books.json");
const {users} = require("../data/users.json");
// const app = express();

/**
 * Route: /books
 * Method: GET
 * Description: Get all books
 * Access: Public
 * Parameters: none
 */
router.get("/",(req,res)=>{
    res.status(200).json({
        success : true,
        data : books
    });    
});

/**
 * Route: /books
 * Method: GET
 * Description: Get specific book by id
 * Access: Public
 * Parameters: id
 */
router.get("/:id",(req,res)=>{
    const {id} = req.params;
    const book = books.find((each)=> each.id ===id);
    if(!book){
        return res.status(404).json({
            success : false,
            message : "Book not found"
        });
    }
    return res.status(200).json({
        success : true,
        data : book
    });
});

/**
 * Route: /books/issued/by-user
 * Method: GET
 * Description: Get all issued books
 * Access: Public
 * Parameters: none
 */
router.get("/issued/by-user",(req,res)=>{
    const usersWithIssuedBooks = users.filter((each)=> {
        if(each.issuedBook) return each;
    });
    const issuedBooks = [];
    usersWithIssuedBooks.forEach((each)=>{
        const book = books.find((book)=>book.id === each.issuedBook);
        book.issuedBy = each.name;
        book.issuedDate = each.issuedDate;
        book.returnDate = each.returnDate;
        issuedBooks.push(book);
    });
    if(!issuedBooks.length==0){
        return res.status(200).json({
            success : true,
            data : issuedBooks
        });
    }
    return res.status(404).json({
        success : false,
        data : "No books issued yet"
    })
    

    
   

});

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

module.exports = router;