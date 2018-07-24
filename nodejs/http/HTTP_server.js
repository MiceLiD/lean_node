const http = require('http')

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text-plain'})
  res.end('薛之谦')
})

server.listen(8000, '127.0.0.1')

console.log('server bound')