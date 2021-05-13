const path = require('path')
//屏蔽不同系统之间的差异，在开发中对于路径的操作我们可以使用 path 模块

const myPath = '/Users/coderwhy/Desktop/Node/课堂/PPT/01_邂逅Node.pdf'
console.log(path.dirname(myPath)) // 父文件夹
console.log(path.basename(myPath))  // 文件名 
console.log(path.extname(myPath))  // 文件名 

// 拼接
console.log(path.join('/user', 'why', 'abc.txt'))

console.log(path.resolve('2')) // E:\LeaCode\learningSth\node\core\2
