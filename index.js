/*
Copyright 2011 Sleepless Software Inc. All rights reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to
deal in the Software without restriction, including without limitation the
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
sell copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
IN THE SOFTWARE. 
*/

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

exports.logLevel = 0

exports.log = function(l) {
	var n = 0
	if(typeof l == "number") {
		// first arg is a number
		if(arguments.length == 1) {
			// just set logLevel to l
			exports.logLevel = l
			return
		}
		// remove the number from arguments array
		n = 1
	}
	else {
		// first arg is not a number, so default log level for this call is 0
		l = 0
	}

	if(exports.logLevel < l)
		return;

	process.stdout.write(ts())
	for(var i = n; i < arguments.length; i++) 
		process.stdout.write(" "+arguments[i]);
	process.stdout.write("\n");
}


if(require.main === module) {
	require('./test.js')
}


