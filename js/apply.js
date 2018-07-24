let greet = function(arg1, arg2, arg3) {
  console.log(`${this.name}---${arg1}, ${arg2}, ${arg3}`)
}
let o = {
  name: 'seven'
}

let args = ['s', 'e', 'v']

let newFn = greet.apply(o, args)

