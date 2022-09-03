const mongoose =  require("mongoose");

const Schema = mongoose.Schema;
// schema  converted=> model which is exported
const userSchema = new Schema(
    {
        name:{
            type:String,
            required : true,
        },
        surname :{
            type : String,
            required:true,
        },
        email :{
            type : String,
            required:true,
        },
        issuedbook :{
            type : mongoose.Schema.Types.ObjectId,
            ref : "Book",
            required: false,
        },
        returnDate :{
            type : String,
            required:false,
        },
        subscriptionType :{
            type : String,
            required:true,
        },
        subscriptionDate :{
            type : String,
            required:true,
        },
    },
    {
        timestamp: true,
    }
);
//collection/DB will have a name "books"
module.exports = mongoose.model("User",userSchema);
