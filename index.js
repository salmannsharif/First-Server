
// Creating My First Server  - by Salman Haha 

const http=require("http"); // Import Http Module 
const hostname="127.0.0.1"; //  Set Local Host 
const port=80 //Set Port

// Creating a server  with the help of http - Module 
// And call a callback function , passed the argument as a Request and Response


const server=http.createServer((req ,res)=>{ 
    res.statusCode=200;
    res.setHeader("Content-type","text/html"); // set the content type 
    res.end("Hello From Salman"); // Initialize Your Html File Here Bro !!!
})


//Listen the Server
server.listen(port,hostname, ()=>{
    console.log(`Server Running At: http://${hostname}:${port}`)
})




