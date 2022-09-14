const express = require('express');
const path = require('path');




const port = 8000;




const app = express();



// settiing view engine and its path
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));








app.get('/', function(req, res){
    return res.render('home');
});




app.listen(port, function(err){
    if(err){
        console.log('*******',err);
        return;
    }
    console.log('Running Server');
});