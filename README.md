
# log5 - A simple logging utility.  

Provides a simple module with a log() function and a logLevel value.
The log() function writes the msg to stdout, prefixed with a timestamp, if
the logLevel is greater than or equal to the number in the first argument.


## Install
	
	npm install log5

## Examples

	log5 = require("log5")
	log5.logLevel = 2
	log(2, "This prints")
	log(3, "This doesn't")

You are free to make up whatever level numbers you want, and assign what ever meaning to them that 
you want.

It's very simple, and gets the job done, and allows you to change the log output at
runtime if you like, by just changing the logLevel.

## More examples

	log5 = require("log5")			// log level defaults to 0
	log = log5.log					// for convenience
	log(1, "does not print")		// because logLevel is 0
	log(1)							// same as log5.logLevel = 1
	log(1, "prints")				
	log(-1)							// sure, why not?
	log(0, "does not print")
	log("does not print")			// if you don't include a # as first arg, 0 is used
	log(0)			
	log("prints now")		
	log("foo", 7, ["bar","baz"])	// logs "foo 7 bar,baz"
	log(3, "foo", 7, ["bar","baz"])	// does not print - logLevel is 0

## License

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
