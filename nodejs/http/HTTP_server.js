const http = require('http')
const url = require('url')

const server = http.createServer((req, res) => {
  const params = parseQuery(url.parse(req.url).query)
  const { callback } = params
  res.writeHead(200, {'Content-Type': 'application/json'})
  res.end(`${callback}(${'帅冬'})`)
})

server.listen(8000, '127.0.0.1')

console.log('server bound')

function parseQuery(str) {
  const _a = str.split('&')
  const _p = {}
  _a.forEach(item => {
    let _i = item.split('=')
    _p[_i[0]] = _i[1]
  })
  return _p
}