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

mongoose.connect('mongodb+srv://anupri:anupri02@cluster0.l6txv.mongodb.net/test', {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.set("useCreateIndex",true);

const userSchema = new mongoose.Schema({
    name: String,
    password: String
});


userSchema.plugin(passportLocalMongoose);

const User = mongoose.model("User", userSchema);

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


let items = data.getProducts();
let ladiesArr = ladyData.getLady();


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

app.get("/thanku", function(req,res){
    res.render("thanku");
})

app.get("/product", function(req,res){
    if(req.isAuthenticated()){
        res.render("product", {itemData: items, login:"hidden", logout:" "});
    }else{
        res.render("product", {itemData: items, login:" ", logout:"hidden"});
    }
})

app.get("/helpus", function(req,res){
        res.render("donate", {itemData: items, login:"hidden", logout:" "}); 
})

app.get("/donatesu", function(req,res){
    res.render("donatesum");
})
app.get("/userregister", function(req,res){
     res.render("usernotfound");
})
app.get("/profile", function(req,res){
    if(req.isAuthenticated()){
        res.render("profile", {lady : ladiesArr, login:"hidden", logout:" "});
    }else{
        res.render("login", {lady : ladiesArr, login:" ", logout:"hidden"});
    }
})

app.get("/Superwomen", function(req,res){
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
 
 


// =====================>.>>>>>>>>>>>>>>==========================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
app.post("/donatesu" , function(req,res){
    res.redirect("donatesum");
});
app.post("/helpus" , function(req,res){
    res.redirect("donate");
});

app.post("/donateus" , function(req,res){
    res.render("thankfdon");
});

app.post("/bepart" , function(req , res){
    res.render("beapart");
});

app.post("/paycard" , function(req , res){
    res.render("thanku");
});


app.post("/payment" , function(req,res){
    const name = req.body.productId;
    const seller = req.body.lady;
    const price = req.body.price;
    const image1 = req.body.image1;
    if(req.isAuthenticated()){
        res.render("payment" , {itemData : name, itemData1 : seller, itemData2 : price, itemData3 : image1, login:"hidden", logout:" "}); 
 }else{
     res.render("login" ,  {itemData : name,itemData1 : seller,itemData2 : price,itemData3 : image1, login:"hidden", logout:" "}); 
 }
});


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
         res.redirect("/register");
         console.log(err);
     } else {
         passport.authenticate("local")(req, res, function(){
             res.redirect("/");
         });
     }
 })
})

app.post("/thanku" , function(req , res){
 res.redirect("/thanku");
})

app.listen(3000, function(){
 console.log("Server started on port 3000");
});

