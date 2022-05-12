const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));


app.listen(3000, () => console.log("Server is running"));

app.get("/", (req,res) => {
  res.redirect("/home");
});

const list = new Array();
const work = new Array();

app.get("/home",(req,res) => {
    const d = new Date();
    res.render("index", {date: d.toDateString(), list: list});
});

app.get("/work",(req,res) => {
    const d = "Work";
    res.render("index", {date: d, list: work});
});

app.post("/home", (req,res) => {
  const newItem = req.body.newItem;

  if(req.body.list == "Work"){
    work.push(newItem);
    res.redirect("/work");
  }else{
    list.push(newItem);
    res.redirect("/home");
  }

});
