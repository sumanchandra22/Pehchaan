const express = require("express");
const app = express();
const bodyParser = require("body-parser"); 
const ejs = require("ejs");
const mongoose = require('mongoose'); 
mongoose.Promise = global.Promise; 

const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
 

const data = require(__dirname + "/items.js");
const ladyData = require(__dirname + "/diff_ladies.js");


app.set("view engine","ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("static"));

app.use(session({
    secret : "Our little secret.",
    resave: false,
    saveUninitialized: false
}));



 


app.use(passport.initialize());
app.use(passport.session());



mongoose.connect('mongodb+srv://suman2206:Kota%402022@cluster0.ixrtu.mongodb.net/test', {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.set("useCreateIndex",true);

const userSchema = new mongoose.Schema({
    username: String,
    password: String
});

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model("User", userSchema);

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



let items = data.getProducts();
let ladiesArr = ladyData.getLady();



const productSchema = new mongoose.Schema({
    item_id: Number,
    image : String,
    name :  String,
    lady : String,
    Price :String,
    Rating : Number
  });

var product = mongoose.model('product', productSchema);


 
   
 

app.get("/", function(req,res){
    if(req.isAuthenticated()){
        res.render("home", {lady : ladiesArr, login:"hidden", logout:" "});
    }else{
        res.render("home", {lady : ladiesArr, login:" ", logout:"hidden"});
    }
})

app.get("/login", function(req,res){
    res.render("login");
})

app.get("/register", function(req,res){
    res.render("register");
})

app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
});



app.get("/product", function(req,res){
    if(req.isAuthenticated()){
        res.render("product");
    }else{
        res.render("product");
    }
})


app.get("/Ladies", function(req,res){
    if(req.isAuthenticated()){
        res.render("Ladies", {ladyItems : ladiesArr, login:"hidden", logout:" "});
    }else{
        res.render("Ladies", {ladyItems : ladiesArr, login:" ", logout:"hidden"});
    }
})

app.get("/:ladyName", function(req, res){
    const requestedTitle = req.params.ladyName;
    ladiesArr.forEach(function(lady){
        if(lady.name === requestedTitle){
            if(req.isAuthenticated()){
                res.render("Lady1", {ladyItem : lady, login:"hidden", logout:" "});
            }else{
                res.render("Lady1", {ladyItem : lady, login:" ", logout:"hidden"});
            }
        }
    })    
})




app.post("/register", function (req, res) {
    User.register({username: req.body.username}, req.body.password, function(err, user){
        if(err){
            console.log(err);
             
            res.redirect("/userregister");
        } else {
            passport.authenticate("local")(req, res, function(){
                
                res.redirect("/");
            });
        }
    })
});


app.post("/login", function (req, res) {
    const user = new User({
        username: req.body.username,
        password: req.body.password
    })

    req.login(user, function(err){
        if(err){
            console.log(err);
        } else {
            passport.authenticate("local")(req, res, function(err){
               if(err){
                console.log(err); 
               }else{
                 
                res.redirect("/");
              
               }
                  
            });
        }
    })
})


                                                
app.listen(3000, function(){
    console.log("Server started on port 3000");
});
