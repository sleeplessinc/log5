
a = require("assert")

l = require("./index.js")

console.log(l.logLevel !== "undefined" ? "ok" : "FAIL")
l.logLevel = 3
l.log1("ok")
l.log4("FAIL")
l.logLevel = 4
l.log4("ok")

o = {}
l.inherit(o)
console.log(o.logLevel !== "undefined" ? "ok" : "FAIL")
o.logLevel = 3
o.log1("ok")
o.log4("FAIL")
o.logLevel = 4
o.log4("ok")


