
var num = 4

var n0 = function(n) {
	if(n >= 0 && n < 10)
		return "0"+n
	return n
}

var ts = function() {
	var d = new Date()
	return d.getFullYear() + "-" +
		n0(d.getMonth()+1) + "-" +
		n0(d.getDate()) + "_" +
		n0(d.getHours()) + ":" +
		n0(d.getMinutes()) + ":" +
		n0(d.getSeconds())

}

var mkf = function(l, o) {
	return function(s) {
		if(l <= o.logLevel)
			process.stdout.write(ts()+" "+s+"\n");
	}
}

exports.inherit = function(o, ll) {
	var i
	o.logLevel = ll || 0
	for(i = 0; i <= num; i++) {
		o["log"+i] = mkf(i, o)
	}
}

exports.inherit(exports)

// globalize for backward compatibility
global.logLevel = 0
global.log0 = exports.log0
global.log1 = exports.log1
global.log2 = exports.log2
global.log3 = exports.log3

if(require.main === module) {
	require('./test.js')
}


