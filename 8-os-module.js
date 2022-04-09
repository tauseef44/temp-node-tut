const os= require('os')
//info about current user
const user =os.userInfo()
console.log(user)
//,methid return system uptime in seconds

console.log(`the system uptime${os.uptime()} secondds`)

const currentOS ={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}
console.log(currentOS) 