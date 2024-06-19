// os module provides operating system-related utility methods and properties. 
import os from "os";

// The os module provides various methods and properties for interacting with the operating system. Some of the common functionalities provided by the os module include:

// platform() method returns the operating system platform
console.log(os.platform());

// arch() method returns the CPU architecture of the operating system
console.log(os.arch());

// cpus() method returns an array of objects containing information about each CPU core
console.log(os.cpus());

// hostname() method returns the hostname of the operating system
console.log(os.hostname());

// homedir() method returns the home directory of the current user
console.log(os.homedir());

// networkInterfaces() method returns an object containing information about the network interfaces of the operating system
console.log(os.networkInterfaces());

// freemem() method returns the amount of free system memory in bytes
console.log(os.freemem());

// totalmem() method returns the total amount of system memory in bytes
console.log(os.totalmem());

// loadavg() method returns an array containing the average system load over the last 1, 5, and 15 minutes
console.log(os.loadavg());

// uptime() method returns the system uptime in seconds
console.log(os.uptime());

// userInfo() method returns information about the current user
console.log(os.userInfo());

// The os module provides a wide range of functionalities for interacting with the operating system, making it a useful tool for building applications that require system-level information and operations. By leveraging the os module, developers can access various system-related details and perform operations based on the underlying operating system environment.