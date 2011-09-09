
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

var num = 3
while(num >= 0) {
	exports["log"+num] = mkf(num, exports)
	num--;
}

exports.logLevel = 0

if(require.main === module) {
	require('./test.js')
}


