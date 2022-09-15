const express = require('express');
const path = require('path');

// configuring database to todo app
const db = require('./config/mongoose');
// importing collection from models
const TodoList = require('./models/todo');


const port = 8000;




const app = express();



// settiing view engine and its path
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));
// setting static file path for use
app.use(express.static('assests'));

// using urlendcoded function to use post method
app.use(express.urlencoded());






// home page rendering
app.get('/', function(req, res){

    // console.log(req.body);
    return res.render('home');
});


// adding task 
app.post('/add', function(req, res){

    console.log(req);
    // return res.render('home');


    TodoList.create(req.body, function(error, newTask){
        if(error){console.log('error in creating a contact'); return;}

        console.log('******', newTask);
        return res.render('home');
    });
});




app.listen(port, function(err){
    if(err){
        console.log('*******',err);
        return;
    }
    console.log('Running Server');
});