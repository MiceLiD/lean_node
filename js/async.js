async function ajax() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('a')
    }, 2000)
  })
}

(async () => {
  var a = await ajax()
  console.log(a)
})()