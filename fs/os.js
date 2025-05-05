const os = require('os');
console.log("CPU articture",+ os.arch);
console.log("Free Memorey",+ os.freemem())
console.log("Total Memory",+os.totalmem())
// console.log("Network niterfaces",+ JSON.stringifynetworkInterfaces())
console.log("os default temp path ",+ os.tmpdir())
console.log("Host Neme ",+ os.hostname());