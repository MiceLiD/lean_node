const net = require('net')

const server = net.createServer((socket) => {
  socket.on('data', (data) => {
    socket.write('hello')
  })

  socket.on('end', () => {
    console.log('connection close')
  })

  socket.write('welcome!')
  // echo
  socket.pipe(socket)
})

server.listen(8000, () => {
  console.log('server bound')
})