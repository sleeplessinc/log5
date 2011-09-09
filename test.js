
a = require("assert")

l = require("./index.js")

console.log(l.logLevel !== "undefined" ? "ok" : "FAIL")
l.logLevel = 2
l.log1("ok")
l.log3("FAIL")
l.logLevel = 4
l.log3("ok")




