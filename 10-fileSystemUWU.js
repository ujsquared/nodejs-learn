//const bigObject = require('fs');
//console.log(bigObject)
const object ={...require('fs')};
const first = object.readFileSync('./content/first.txt', 'utf8')
const second  = object.readFileSync('./content/second.txt', 'utf8')
console.log('--------------------------------------------------------------------')
console.log(first, second)
object.appendFileSync(
    './content/result-sync.txt',
    `Here is the result: ${first}, ${second}`)
    
