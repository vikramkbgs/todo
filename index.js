const express = require("express");
const path = require("path");

// configuring database to todo app
const db = require("./config/mongoose");
// importing collection from models
const TodoList = require("./models/todo");

const port = 8000;

const app = express();

// settiing view engine and its path
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
// setting static file path for use
app.use(express.static("assests"));

// using urlendcoded function to use post method
app.use(express.urlencoded());







// 1. home page rendering display  2. task availabal in database
app.get("/", function (req, res) {
  // // console.log(req.body);
  // return res.render('home');

  TodoList.find({}, function (err, newtasks) {
    if (err) {
      console.log("Error in fetching contacts from db.");
      return;
    }

    return res.render("home", {
      title: "Todo App",
      todoLists: newtasks,
    });
  });
});



app.post("/del", function (req, res) {
  console.log(req.body.id);

  for (let i = 0; i < req.body.id.length; i++) {
    let id = req.body.id[i];

    //findByIdAndDelete function use to find and delete item
    TodoList.findByIdAndDelete(id, function (err) {
      if (err) {
        console.log("Error in deleting contacts from db.", err);
      }
    });
  }
  return res.redirect('back');
});

// adding task in database
app.post("/add", function (req, res) {
  //   console.log(req);
  // return res.render('home');

  TodoList.create(req.body, function (error, newtasks) {
    if (error) {
      console.log("error in creating a taskList", error);
      return;
    }
  });
  return res.redirect('back');
});

app.listen(port, function (err) {
  if (err) {
    console.log("*******", err);
    return;
  }
  console.log("Running Server");
});
