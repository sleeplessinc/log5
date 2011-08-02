
node-log - A simple logging utility.  
------------------------------------

It simply creates global functions log1(), log2(), ..., log5(), as well as a global
variable called logLevel.  The functions all take a string argument which will be 
written to stdout, prefixed with a timestamp, if logLevel is >= to the number in
the function.

For example:

	require("node-log")
	logLevel = 2

	log2("This prints")
	log3("This doesn't")

You are free to make up whatever meanings you want for a given log level.
In practice, log1() messages are typically for things that you probably always want to print
and log5() would be for more "debug" level messages.

It's simple, it gets the job done, and lets you change the log output at runtime if you like, by just
setting logLevel.


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
