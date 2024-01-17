const fs = require('fs')

const requestHandler = (req, res) => {
    const Url = req.url
    const method = req.method
    if (Url === '/'){
        fs.readFile("message.txt", {encoding: "utf-8"}, (err, data) => {
          if(err){
            console.log(err)
          }
          res.write('<html>')                        
          res.write('<head><title>Enter Message</title></head>') 
          res.write(`<body>${data}</body>`)
          res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>') 
          res.write('</html>')
          return res.end()
      })
    } else if (Url === '/message' && method === 'POST'){
        const body = []               
        req.on('data', (chunk) => {
          body.push(chunk)
        })
        req.on('end', () => {
          const paeseBody = Buffer.concat(body).toString()
          const message = paeseBody.split('=')[1]
          fs.writeFileSync('message.txt', message, (err) => {
            if(err){
              console.log(err)
            }
            res.statusCode = 302
            res.setHeader('Location', '/')
            return res.end()
          })
        })
      }
}

// module.exports = requestHandler                  //1st Method

// module.exports = {                               //2nd Method
//     handler: requestHandler,
//     someText: 'Some hard coded text'
// }

exports.handler = requestHandler                    //3rd Method
exports.someText = 'Some hard coded text'