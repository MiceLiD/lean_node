let o = new Proxy({}, {
  set: function(obj, key, value) {
    obj[key] = value
    console.log(`${key} be set ${value}`)
  },
  get: function(obj, key) {
    return key in obj ? obj[key] : 'not set'
  }
})

o.age = 20
console.log(o.age)