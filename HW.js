const http = require('http') 

const routes = require('./routes')

// const server = http.createServer(routes)                 //Work fine with 1st method

console.log(routes.someText)                                //Work fine with 2nd and 3rd method
const server = http.createServer(routes.handler) 
server.listen(4000)
