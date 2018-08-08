let o = {}
function setName(name) {
  o = {
    ...o,
    [name + '_computed']: name
  }
}

setName('lee')
setName('done')
console.log(o)

