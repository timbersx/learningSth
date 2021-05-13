const fs = require('fs')

// fs.promises.readFile('./path.js').then((res) => {
// })

fs.promises.writeFile('./test.js', 123).then((res) => {

})

fs.promises.readFile('./test.js', 'utf-8').then((res) => {
  console.log(res)
})