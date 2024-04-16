const express=require("express");
const mongoose=require("mongoose");
require("dotenv").config();

const cors=require("cors")

const app=express();

const PORT=process.env.PORT || 3000


// middleware-to handle cross origin request
app.use(cors());
app.use(express.json())

app.listen(PORT,()=>{
    `listening at ${PORT}...`
})

const dbConnect=require("./config/database");
dbConnect();

const routes=require("./routes/todoRoutes");
app.use("/api",routes);

app.get("/",(req,res)=>{
    res.send("hihh...");
})