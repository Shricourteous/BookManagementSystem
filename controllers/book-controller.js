const { UserModel, BookModel } = require("../models");
const IssuedBook = require("../dtos/book-dtos");
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
    const users = UserModel.find({
        issuedbook :{$exists:true},
    }).populate("issuedBook"); 

    const issuedBooks = users.map((each)=> new IssuedBook(each)); 

    if(!issuedBooks.length==0){
        return res.status(200).json({
            success : true,
            data : issuedBooks,
        });
    }
    return res.status(404).json({
        success : false,
        data : "No books issued yet"
    });
}

exports.addNewBook = async (req, res)=>{
    const {data} = req.body;
    
    if(!data){
     return res.status(404).json({
        success:false,
        message : "no data provided"
     });
    }
    
    // wait and call 
    await BookModel.create(data);
    
    const allBooks = await BookModel.find();
    
    
    return res.status(200).json({
        success:true,
        message: "Data added successfully",
        data : allBooks
    })
};

exports.updateBookById = async (req,res)=>{
    const {id} = req.params;
    const {data} = req.body;
    const updatedBook = await BookModel.findOneAndUpdate({_id:id},data,{new:true})
    return res.status(200).json({
        message : true,
        data : updatedBook
    });
};

// Get Book By Name

exports.getSingleBookByName = async (req,res)=>{
    const {name} = req.params;
    const book = await BookModel.findOne({
        name:name,
    })  
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
