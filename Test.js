//blabla
const exp = require('express');
const https = require('https');
const app = exp();

function test(req, res, next){
    console.log("Hellow world");
    next();
}

app.use(test);


app.get("/", function(req, res){
    res.send("Home Page");

    res.end;
});

// app.get("/login", function(req, res){
//     res.send("GET: Login Page");
// });

// app.post("/login", function(req, res){
//     res.send("POST: Login Page");
// });

app.route("/login")
.get(function (req,res){
    res.send("Login Page (GET)");
    res.end;
})
.post(function (req,res){
    res.send("Login Page (POST)")
    res.end;
});

//http:localhost:8080
var port = process.env.PORT || 8080;
app.listen(port);