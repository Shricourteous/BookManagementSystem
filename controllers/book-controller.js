const { UserModel, BookModel } = require("../models");

exports.getAllBooks = async (req,res)=>{
    // All the list of Book data
    // Take time to load data (async-await)
    const books = await BookModel.find();
    if (books.length===0){
        return res.status(404).json({
            success : false,
            message : "No Book found",
        });
    }
    return res.status(200).json({
        success : true,
        message : books,
    });
}


exports.getSingleBookById = async (req,res)=>{
    const {id} = req.params;
    const book = await BookModel.findById(id);
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
}

exports.getAllIssuedBook = async (req,res)=>{
    const user = UserModel.find({
        issuedbook :{$exists:true},
    });  //Day35 1:11:36
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
}