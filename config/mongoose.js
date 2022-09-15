// 1. require library
const mongoose = require('mongoose');

// 2. connect the database
mongoose.connect('mongodb://localhost/todo_list_db');


//3. acquire connection (to check if is successful)
const db = mongoose.connection;

//4. error
db.on('error', console.error.bind(console, 'error connecting to db'));

//5. Server up and running
db.once('open', function(){
    console.log('Succesfully connected to the database');
});