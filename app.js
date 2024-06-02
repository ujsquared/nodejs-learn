const os = {} = require('os')
// info about current user
//const user = os.userInfo()
 // can do so much with this
// method returns the system uptime in seconds
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS)
