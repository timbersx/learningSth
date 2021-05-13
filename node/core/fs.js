const fs = require('fs')
const path = require('path')

// fs.stat('path.js', (err, result) => {
//   console.log(err)
//   console.log(result.isDirectory())
// })

// fs.promises.stat('../../js/sth.js').then(res=>{
//   console.log(res.birthtime)
// })

// 文件描述符 // Node.js 抽象出操作系统之间的特定差异，并为所有打开的文件分配一个数字型的文件描述符。
// fs.open('path.js', 'r', (err, fd) => {
//   console.log(fd)
//   fs.fstat(fd, (err, result) => {
//     console.log(result.isFile())
//   })
// })

// 递归创建文件-自实现
function createFile(path, callback) {
  const paths = path.split('/')
  let currentPath = __dirname
  function createOne(pathList) {
    currentPath += '/' + pathList[0]
    fs.promises.stat(currentPath).then(() => {
    },() => {
      fs.promises.mkdir(currentPath).then(()=>{})
    }).finally(()=> {
      if(pathList.length>1) {
        createOne(pathList.slice(1))
      } else {
        callback()
      }
    })
  }
  createOne(paths)
}

// createFile('a/b/e', () => {
//   console.log('no-err')
// })

// 网络实现版本
function mkdirs(dirname, callback) {  
  fs.exists(dirname, function (exists) {  
      if (exists) {  
          callback();
      } else {  
          mkdirs(path.dirname(dirname), function () {  // 逐级查找，直到查找到存在的文件，存在后逐级创建
              fs.mkdir(dirname, callback);  
          });  
      }  
  });  
} 
mkdirs('e/f/g', (e) => {
  console.log(e)
})

// 自实现改造
function createFileV2(pa, callback) {
  fs.stat(pa, (err, stat) => {
    if(stat) {
      callback()
    } else {
      createFileV2(path.dirname(pa), () => {
        fs.mkdir(pa, callback)
      })
    }
  })
}

createFileV2('f/g/k', (err) => {
  console.log(err)
})