const express=require("express");   // create express server 
// const faker = require("faker");     // it is sed to crate some random data 
const { agent } = require("supertest");  
var bodyParser=require('body-parser'); //whenever we are creating the post method so idely we trafer the data in request body  pass the data in body section
const app=express();    // create express application 
app.use(bodyParser());
//template engines  
app.set("views","./views")   // this is the folder where you are going to keep your files which we are going to render or display content we are keeping into this folder //  using template engine
app.set("views engine","ejs")  // decide which engine to use engine name in to the second argument,
var users=[];
// for (let i=0;i<5;i++){
//     users.push({
//         name: faker.name.findName(),
//         email: faker.internet.email(),
//         // all these data case in backend 
//         //same data we have to render into the html page
//     })  
// }
// console.log(users);
app.get("/",(req,res)=>{  // create a route using the HTTP GET request to the url/path specified
    // render the file insted of just read and pass bease there is lot of files to process like json.js and all
   /*load router1 */ res.render("index.ejs",{users}); //passing data from users array    // second arrgument should be passed as object
})
//load router-2
app.get("/form",(req,res)=>{   // tranfer data through params
    res.render("form.ejs")  //render the or load the file 
    //we are not passing any data so there is no need of 2nd argument 
})
//post request router 
app.post("/user/add",(req,res)=>{
    //see what is comming here 
    console.log(req.body);
    users.push({
        name:req.body.name, //name attribute
        email:req.body.email
    })
    res.redirect("/");
})
app.listen(5000, ()=>console.log("server is running"));
//using dynamic pages we are using ejs template engine
//ejs required to whatever content you are going to be display it is on the same folder but place ont he sifferent folder named as views