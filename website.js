const http = require('http');

const port = process.env.PORT || 3000 ;
const fs = require('fs');

const server = http.createServer(
    
    (req,res) =>{
        
        
        res.setHeader('Content-Type','text/html');
        if(req.url === '/'){
            res.statusCode = 200;
            res.end(
                
                ' <h1> Hello World </h1> <p> This will be returned </p>'
                  )
        }
        else if(req.url === '/about'){
            res.statusCode = 200;
            res.end(
                
                ' <h1> About Us </h1> <p> This will be returned </p>'
                  )
        }
        else if(req.url === '/shivam'){
            res.statusCode = 200;
          const data = fs.readFileSync('index.html');

            res.end(data.toString());
        }
        else{   
            res.statusCode = 404;
            res.end(
                ' <h1> Page Not Found </h1> <p> This will be returned </p>  '
            )
           
        }
       
    }
)

server.listen(port, () =>{
  
    console.log(`server is listning on port ${port}`)
});