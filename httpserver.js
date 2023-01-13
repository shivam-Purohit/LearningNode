const http = require('http');

const port = process.env.PORT || 3000 ;

const server = http.createServer(
    // a method is passed which handles the request
    (req,res) =>{
        console.log(req.url);
        res.statusCode = 200;
        res.setHeader('Content-Type','text/html');
        res.end(
            //gives the content in some form 

            ' <h1> Hello World </h1> <p> This will be returned </p>'
              )
    }
)
//this is return anything if the server do not listen
server.listen(port, () =>{
  
    //we need to provide a callback first and then a method 
    console.log(`server is listning on port ${port}`)
});