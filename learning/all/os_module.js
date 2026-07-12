const { platform } = require("os");

const os = require("os");
console.log("platform",os.platform());
console.log("architecture",os.arch());
console.log("freememory",os.freemem());
console.log("uptime",os.uptime());
console.log("total memory",os.totalmem());
console.log("homedir",os.homedir());
console.log("network interface",os.networkInterfaces());
