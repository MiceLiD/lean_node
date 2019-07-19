/**
 * @function
 * @param { Function } fn 
 * @param { Number } time 
 * @param { Object } context
 */
const throttle = (fn, time, context) => {
  let lock, args, wrapperFn, later
  
  later = () => {
    lock = false
    if (args) {
      wrapperFn.apply(context, args)
      args = false
    }
  }

  wrapperFn = () => {
    if (lock) {
      // 调用太快
      args = arguments
    } else {
      fn.apply(context, arguments)
      setTimeout(later, time)
      lock = true
    }
  }

  return wrapperFn
}

const fetchSomething = () => {
  setTimeout(() => {
    console.log('fetch...', this)
  }, 1000)
}

const f = throttle(fetchSomething, 1000, this)

const intervel = setInterval(() => {
  console.log('click fetch button')
  f()
}, 800)

setTimeout(() => {
  clearInterval(intervel)
}, 10000)