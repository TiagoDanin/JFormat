var format = require('./index.js')
console.log("Forever {Python}".format({Python: "JavaScript"})) //Forever JavaScript
console.log("Forever {0}".format(["JavaScript"])) //Forever JavaScript
console.log("Forever {Java}".format({}, true)) //Forever

console.log(format("Forever {Python}", {Python: "JavaScript"})) //Forever JavaScript
console.log(format("Forever {0}", ["JavaScript"])) //Forever JavaScript
console.log(format("Forever {Java}", {}, true)) //Forever