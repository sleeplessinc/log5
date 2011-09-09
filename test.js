
l = require("./index.js")

console.log(l.logLevel !== "undefined" ? "ok" : "FAIL")
l.logLevel = 2
l.log(1, "ok")
l.log(3, "FAIL")
l.logLevel = 4
l.log(3, "ok")
l.log(3, "ok", 4, ["you","and","you"])




