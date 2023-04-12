const os = require("os");

// Info about current user
const user = os.userInfo();
console.log(user);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
// Method returns the current OS
console.log(currentOS);
// Method returns the system uptime in seconds
console.log(`The system uptime is: ${os.uptime()} seconds`);
