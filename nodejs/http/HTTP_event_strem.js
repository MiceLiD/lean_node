const http = require('http')

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Access-Control-Allow-Origin': '*'
  })
  res.write('retry: 3000\n')
  res.write('event: getnumber\n')
  res.write('data: first data\n\n')
  const timer = setInterval(() => {
    const n = Math.random(0, 1)
    res.write('event: getnumber\n')
    res.write(`data: n---${n}\n\n`)
  }, 2000)

  req.connection.addListener('close', () => {
    clearInterval(timer)
  })
})

server.listen(8045, '127.0.0.1')

console.log('server bound')