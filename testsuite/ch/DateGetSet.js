




var d = new Date();


d.setDate(12345678)
d.setTime(456789);

WScript.Echo("toDateString : " + d.toDateString())
WScript.Echo("getTime : " + d.getTime())
WScript.Echo("getFullYear : " + d.getFullYear())
WScript.Echo("getYear : " + d.getYear())
WScript.Echo("getUTCFullYear : " + d.getUTCFullYear())
WScript.Echo("getMonth : " + d.getMonth())
WScript.Echo("getUTCMonth : " + d.getUTCMonth())
WScript.Echo("getDate : " + d.getDate())
WScript.Echo("getUTCDate : " + d.getUTCDate())
WScript.Echo("getDay : " + d.getDay())
WScript.Echo("getUTCDay : " + d.getUTCDay())
WScript.Echo("getHours : " + d.getHours())
WScript.Echo("getUTCHours : " + d.getUTCHours())
WScript.Echo("getMinutes : " + d.getMinutes())
WScript.Echo("getUTCMinutes : " + d.getUTCMinutes())
WScript.Echo("getSeconds : " + d.getSeconds())
WScript.Echo("getUTCSeconds : " + d.getUTCSeconds())
WScript.Echo("getMilliseconds : " + d.getMilliseconds())
WScript.Echo("getUTCMilliseconds : " + d.getUTCMilliseconds())
WScript.Echo("getTimezoneOffset : " + d.getTimezoneOffset())


d.setTime(100);
WScript.Echo("getTime : " + d.getTime());


d.setMilliseconds(10);
WScript.Echo("getMilliseconds : " + d.getMilliseconds());


d.setUTCMilliseconds(11);
WScript.Echo("getUTCMilliseconds : " + d.getUTCMilliseconds());


d.setSeconds(12);
WScript.Echo("getSeconds : " + d.getSeconds())

d.setSeconds(13,14);
WScript.Echo("getSeconds : " + d.getSeconds())
WScript.Echo("getMilliseconds : " + d.getMilliseconds());


d.setUTCSeconds(15)
WScript.Echo("getUTCSeconds : " + d.getUTCSeconds())

d.setUTCSeconds(16, 17)
WScript.Echo("getUTCSeconds : " + d.getUTCSeconds())
WScript.Echo("getUTCMilliseconds : " + d.getUTCMilliseconds())


d.setMinutes(18)
WScript.Echo("getMinutes : " + d.getMinutes())

d.setMinutes(19, 20)
WScript.Echo("getMinutes : " + d.getMinutes())
WScript.Echo("getSeconds : " + d.getSeconds())

d.setMinutes(21, 22, 23)
WScript.Echo("getMinutes : " + d.getMinutes())
WScript.Echo("getSeconds : " + d.getSeconds())
WScript.Echo("getMilliseconds : " + d.getMilliseconds());


d.setUTCMinutes(24)
WScript.Echo("getUTCMinutes : " + d.getUTCMinutes())

d.setUTCMinutes(25,26)
WScript.Echo("getUTCMinutes : " + d.getUTCMinutes())
WScript.Echo("getUTCSeconds : " + d.getUTCSeconds())

d.setUTCMinutes(27,28,29)
WScript.Echo("getUTCMinutes : " + d.getUTCMinutes())
WScript.Echo("getUTCSeconds : " + d.getUTCSeconds())
WScript.Echo("getUTCMilliseconds : " + d.getUTCMilliseconds())


d.setHours(2)
WScript.Echo("getHours : " + d.getHours())

d.setHours(3, 1)
WScript.Echo("getHours : " + d.getHours())
WScript.Echo("getMinutes : " + d.getMinutes())

d.setHours(4, 2, 3)
WScript.Echo("getHours : " + d.getHours())
WScript.Echo("getMinutes : " + d.getMinutes())
WScript.Echo("getSeconds : " + d.getSeconds())

d.setHours(5, 6, 7, 8)
WScript.Echo("getHours : " + d.getHours())
WScript.Echo("getMinutes : " + d.getMinutes())
WScript.Echo("getSeconds : " + d.getSeconds())
WScript.Echo("getMilliseconds : " + d.getMilliseconds());


d.setUTCHours(2)
WScript.Echo("getUTCHours : " + d.getUTCHours())

d.setUTCHours(3, 1)
WScript.Echo("getUTCHours : " + d.getUTCHours())
WScript.Echo("getUTCMinutes : " + d.getUTCMinutes())

d.setUTCHours(4, 2, 3)
WScript.Echo("getUTCHours : " + d.getUTCHours())
WScript.Echo("getUTCMinutes : " + d.getUTCMinutes())
WScript.Echo("getUTCSeconds : " + d.getUTCSeconds())

d.setUTCHours(5, 6, 7, 8)
WScript.Echo("getUTCHours : " + d.getUTCHours())
WScript.Echo("getUTCMinutes : " + d.getUTCMinutes())
WScript.Echo("getUTCSeconds : " + d.getUTCSeconds())
WScript.Echo("getUTCMilliseconds : " + d.getUTCMilliseconds());


d.setDate(1000);
WScript.Echo("getDate : " + d.getDate())


d.setUTCDate(2000)
WScript.Echo("getUTCDate : " + d.getUTCDate())


d.setMonth(7)
WScript.Echo("getMonth : " + d.getMonth())

d.setMonth(8, 3000)
WScript.Echo("getMonth : " + d.getMonth())
WScript.Echo("getDate : " + d.getDate())


d.setUTCMonth(7)
WScript.Echo("getUTCMonth : " + d.getUTCMonth())

d.setUTCMonth(8, 3000)
WScript.Echo("getUTCMonth : " + d.getUTCMonth())
WScript.Echo("getUTCDate : " + d.getUTCDate())


d.setFullYear(2009)
WScript.Echo("getFullYear : " + d.getFullYear())


d.setYear(2009)
WScript.Echo("getYear : " + d.getYear())

d.setFullYear(2010, 10)
WScript.Echo("getFullYear : " + d.getFullYear())
WScript.Echo("getMonth : " + d.getMonth())

d.setFullYear(2011, 11, 1234)
WScript.Echo("getFullYear : " + d.getFullYear())
WScript.Echo("getMonth : " + d.getMonth())
WScript.Echo("getDate : " + d.getDate())


d.setUTCFullYear(2009)
WScript.Echo("getUTCFullYear : " + d.getUTCFullYear())

d.setUTCFullYear(2010, 10)
WScript.Echo("getUTCFullYear : " + d.getUTCFullYear())
WScript.Echo("getUTCMonth : " + d.getUTCMonth())

d.setUTCFullYear(2011, 11, 1234)
WScript.Echo("getUTCFullYear : " + d.getUTCFullYear())
WScript.Echo("getUTCMonth : " + d.getUTCMonth())
WScript.Echo("getUTCDate : " + d.getUTCDate())

d.setDate(12345678);
WScript.Echo("toUTCString : " + d.toUTCString())
WScript.Echo("valueOf : " + d.valueOf())

WScript.Echo("toISOString method : " + typeof d.toISOString);
WScript.Echo("toJSON method : " + typeof d.toJSON);

WScript.LoadScriptFile("..\\UnitTestFramework\\UnitTestFramework.js", "self");

assert.throws(() => Date.prototype.setYear(5), TypeError);
assert.throws(() => Date.prototype.getFullYear(), TypeError);
assert.throws(() => Date.prototype.setYear(4, 4), TypeError);
assert.throws(() => Date.prototype.getMonth(), TypeError);
assert.throws(() => Date.prototype.setFullYear(1999), TypeError);
assert.throws(() => Date.prototype.setFullYear(1998, 5), TypeError);
