const fs = require('fs-extra');
let myjson = fs.readJsonSync("package.json")
console.log(myjson.dependencies)