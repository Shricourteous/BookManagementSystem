const express = require("express");
const app = express();
const dotenv = require("dotenv");

// importing routes of JS file(no need to specify file extension)
// userRouter, bookRouter => routeBooksJS, routerUsersJs
const routeBooksJs = require("./routes/books");
const routeUsersJs = require("./routes/users");

// DB Connection
const DbConnection = require("./databaseConnection");

dotenv.config();

app.use(express.json());

DbConnection();

app.get("/",(req,res)=>{
    res.status(200).json({
        message : "server is up & running"
    });
});
app.use("/books",routeBooksJs);
app.use("/users",routeUsersJs);


app.get("*",(req,res)=>{
    res.status(404).json({
        message : "Page Not Found"
    });
});

app.listen(4040, ()=>{
    console.log("Server is running at 4040 port")
});
