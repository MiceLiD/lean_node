'use strict'
global.b = 2
let o = {
  b: 1,
  func: () => {
    console.log(this.b)
  }
}

o.func()