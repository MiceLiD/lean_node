const dgram = require('dgram')

const client = dgram.createSocket('udp4')
const msg = new Buffer('与其让你在我爱中枯萎，宁愿你受伤落泪!')
client.send(msg, 0, msg.length, 41234, 'localhost', (err, nytes) => {
  client.close()
})