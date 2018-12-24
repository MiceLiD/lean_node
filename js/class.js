class A {
  constructor() {
    this.name = '博源'
  }

  init() {
    console.log(this)
    return this.getName()
  }

  getName() {
    console.log(this.name)
    return this.name
  }
}

let a = new A()
let v = a.init()
console.log(v)