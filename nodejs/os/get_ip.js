const os = require('os')
const ifaces = os.networkInterfaces()
let ipv4 = ''
Object.keys(ifaces).forEach(key => {
  const value = ifaces[key]
  value.forEach(v => {
    if (v.internal || v.family !== 'IPv4') {
      return
    }
    const { address } = v
    ipv4 = address
  })
})
console.log(ipv4)