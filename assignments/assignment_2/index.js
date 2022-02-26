
const fs = require('fs');
const http = require('http');
const content='<h1>Hello World</h1>'

fs.writeFile("index.html",content,(err) => {
    console.log(err)
})
const server = http.createServer((req,res) => {
    fs.readFile("index.html", {encoding:"utf-8"},(err,data)=> {
        res.end(data);
    })
})
server.listen(5000, () => {console.log("Server is running")}) 