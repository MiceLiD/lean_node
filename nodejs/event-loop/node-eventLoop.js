const fs = require('fs')

// start
console.log('start')

// timer1
setTimeout(() => {
  console.log('timer1')
  // promise1
  Promise.resolve().then(function() {
    console.log('promise1')
  })
}, 100)

// I/O
fs.readFile('./dedup.js', 'utf8', () => {
  console.log('I/O')
})

// nextTick
process.nextTick(() => {
  console.log('nextTick')
})

// timer2
setTimeout(() => {
  console.log('timer2')
  // promise2
  Promise.resolve().then(() => {
    console.log('promise2')
  })
}, 0)

// immediate
setImmediate(() => {
  console.log('Immediate')
})

// promise3
Promise.resolve().then(() => {
  console.log('promise3')
})

// end
console.log('end')