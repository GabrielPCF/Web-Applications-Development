//Constant declarations
const exp = require('express');
const https = require('https');
const path = require("path");
const body_parser = require("body-parser");

const app = exp();

function test(req, res, next){
    console.log("Hellow world");
    next();
}

app.use(test);
app.use(body_parser.urlencoded({extended:true}));

app.get("/", function(req, res){
    console.log(__dirname);
    res.sendFile(path.join(__dirname, "Home.html"));
});

app.get("/login", function(req, res){
    res.sendFile(path.join(__dirname, "login.html"));
});

app.get("/about_us", function(req, res){
    res.sendFile(path.join(__dirname, "about_us.html"));
});

app.post("/user_login", function(req,res){
    var username = req.body.username;
    var password = req.body.password;
    //res.redirect("/admin_dashboard");
    res.send("Username:" + username + "\n\nPassword:" + password);
});

//localhost:8080/product/14578
app.get("/product/:id", function(req,res){
    var product_id = req.params.id;
    res.send("Product ID:" + product_id);
});

app.get("/admin_dashboard", function(req,res){
    var obj = {username:"Gabriel", email:"dummyemail@gmail.com"}
    res.json(obj);
});


//http:localhost:8080
var port = process.env.PORT || 8080;
app.listen(port);