
log5 = require("./index.js")

log = log5.mkLog("LOG5TEST")

log(1)
log(1, "this should print")
log(2, "THIS SHOULD NOT PRINT")

log(2)
log(1, "this should print")
log(2, "this should print")
log(3, "THIS SHOULD NOT PRINT")
log(2, "foo", 13, ["a", "b"], {x:17, y:"bar"})



