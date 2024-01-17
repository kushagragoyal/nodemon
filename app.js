const http = require('http')           //It's used to import the Node.js built-in http module into JS code.
                                       //This module provides functionality to create an HTTP server and handle
                                       //HTTP requests and responses.
const url = require('url')

//NORMAL WAY OF CREATING SERVER 
//function rqlistner (req, res){       //This request listener function has 2 arguments which are request and 
                                       //Response, Request will have data about the request and response will 
                                       //help us in sending the response.
//}

//http.createServer(rqlistner)          //This function creates an HTTP server. It takes a rqListener function
                                        //as an argument. The rqListener is a callback function that gets called
                                        //every time an HTTP request is received by the server.

//CREATING SERVER WITH THE HELP OF ANONYMOUS FUNCTION
const server = http.createServer((req, res) => {            //http.createServer method always returns a server.
    console.log(`Kushagra Goyal`)
    const parsedUrl = url.parse(req.url, true)
    const path = parsedUrl.pathname
    //process.exit()                    //We use process.exit() to exit from the event loop and after using this 
                                        //request from will not be accepted from the program and user will not 
                                        //be able to access the web page hence in most cases it's not used.
    res.setHeader('Contnet-Type','text/html')  //res is used to fill the response with the data which we want to 
                                               //send from the server, Like here we are making Content-Type as
                                               //of a header as text/html
    res.write('<html>')                        //res.write is a complicated way to write html code through res 
    res.write('<head><title>My First Page</title></head>') 
    res.write('<body><h1>Hello from node js Server<h1><body>') 
    res.write('</html>') 

    if (path === '/home') {
        res.end('Welcome home');                //res.end() marks the end of code
      } else if (path === '/about') {
        res.end('Welcome to About Us page');
      } else if (path === '/node') {
        res.end('Welcome to my Node.js project');
      } else {
        res.end('Invalid URL');                     
      }

    res.end()                                  
})

server.listen(4000)                     //server.listen method is used to bind and listen for connections on a 
                                        //specified IP address and port. It's used along with http.createServer

//Now we will have to run this file in the node.js terminal and then if we will go to web browser and will write
//localhost:4000 to get the output of the program in node js terminal.

