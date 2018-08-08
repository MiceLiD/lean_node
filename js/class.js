class A {
  constructor() {
    this.name = 'seven'
  }

  static methodA() {
    console.log(this)
  }
}
console.log(A.methodA())

class B extends A {
  static methodB() {
    console.log('static method B')
  }
  methodB_dynamic() {
    console.log('static dy B')
  }
}

let b = new B()

// console.log(b.__proto__)