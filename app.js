const express = require("express");
const app = express();
const bodyParser = require("body-parser"); 
const ejs = require("ejs");


app.set("view engine","ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("pehchaan_static"));



app.get("/", function(req,res){
   
        res.render("home");
    
})


app.listen(3000, function(){
    console.log("Server started on port 3000");
});
