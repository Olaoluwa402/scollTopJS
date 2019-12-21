

const express = require("express");
const app = express();
const bodyParser = require("body-parser");



// app sets and use
app.use(bodyParser.json({limit: '10mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}));
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");




var port = process.env.PORT;
if(port == null || port == " "){
    port = 3000;
}

app.listen(port, function(){
   console.log("Your Server Has Started!");
});
