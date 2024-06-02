// Modules = Encapsulated code (only share minimum)
// CommonJS = every file is module (by default)
const names = require('./4-names')
console.log(names)
const john = names.john
const peter = names.peter

const sayHi = require('./5-utils')
sayHi('susan')
sayHi(john)
sayHi(peter)
