const mongoose =  require("mongoose");

const Schema = mongoose.Schema;
// schema  converted=> model which is exported
const bookSchema = new Schema(
    {
        name:{
            type:String,
            required : true,
        },
        author :{
            type : String,
            required:true,
        },
        genre :{
            type : String,
            required:true,
        },
        price :{
            type : Number,
            required:true,
        },
        publisher :{
            type : String,
            required:true,
        },
    },
    {
        timestamp: true,
    }
);

//collection/DB will have a name "books"
// Book Holds Book Data
module.exports = mongoose.model("Book",bookSchema);
