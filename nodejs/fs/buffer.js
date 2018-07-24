const fs = require('fs')

fs.readFile('./me.txt', 'utf8', (err, data) => {
  if (err) console.log(err)
  console.log(data)
})