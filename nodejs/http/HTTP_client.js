const http = require('http')

const req = http.request({
  hostname: '127.0.0.1',
  port: 8000,
  path: '/',
  method: 'GET'
}, res => {
  console.log(`STATUS: ${res.statusCode}`)
  console.log(`HEADERS: ${JSON.stringify(res.headers)}`)
  res.setEncoding('utf-8')

  res.on('data', chunk => {
    console.log(chunk)
  })
})

req.end()