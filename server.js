const express = require("express");
const app = express();
const routeBooksJs = require("./routes/books");
const routeUsersJs = require("./routes/users");

app.use(express.json());

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
