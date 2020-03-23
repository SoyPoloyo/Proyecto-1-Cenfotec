var express = require('express');
var path = require("path");
var app = express();

app.use(express.static(path.join(__dirname, "public")));

app.listen(5252, function(){
    console.log("servidor corriendo en el 5252")
});