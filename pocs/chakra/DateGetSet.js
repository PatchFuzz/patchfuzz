var d = new Date();


d.setDate(12345678)
d.setTime(456789);

print("toDateString : " + d.toDateString())
print("getTime : " + d.getTime())
print("getFullYear : " + d.getFullYear())
print("getYear : " + d.getYear())
print("getUTCFullYear : " + d.getUTCFullYear())
print("getMonth : " + d.getMonth())
print("getUTCMonth : " + d.getUTCMonth())
print("getDate : " + d.getDate())
print("getUTCDate : " + d.getUTCDate())
print("getDay : " + d.getDay())
print("getUTCDay : " + d.getUTCDay())
print("getHours : " + d.getHours())
print("getUTCHours : " + d.getUTCHours())
print("getMinutes : " + d.getMinutes())
print("getUTCMinutes : " + d.getUTCMinutes())
print("getSeconds : " + d.getSeconds())
print("getUTCSeconds : " + d.getUTCSeconds())
print("getMilliseconds : " + d.getMilliseconds())
print("getUTCMilliseconds : " + d.getUTCMilliseconds())
print("getTimezoneOffset : " + d.getTimezoneOffset())


d.setTime(100);
print("getTime : " + d.getTime());


d.setMilliseconds(10);
print("getMilliseconds : " + d.getMilliseconds());


d.setUTCMilliseconds(11);
print("getUTCMilliseconds : " + d.getUTCMilliseconds());


d.setSeconds(12);
print("getSeconds : " + d.getSeconds())

d.setSeconds(13,14);
print("getSeconds : " + d.getSeconds())
print("getMilliseconds : " + d.getMilliseconds());


d.setUTCSeconds(15)
print("getUTCSeconds : " + d.getUTCSeconds())

d.setUTCSeconds(16, 17)
print("getUTCSeconds : " + d.getUTCSeconds())
print("getUTCMilliseconds : " + d.getUTCMilliseconds())


d.setMinutes(18)
print("getMinutes : " + d.getMinutes())

d.setMinutes(19, 20)
print("getMinutes : " + d.getMinutes())
print("getSeconds : " + d.getSeconds())

d.setMinutes(21, 22, 23)
print("getMinutes : " + d.getMinutes())
print("getSeconds : " + d.getSeconds())
print("getMilliseconds : " + d.getMilliseconds());


d.setUTCMinutes(24)
print("getUTCMinutes : " + d.getUTCMinutes())

d.setUTCMinutes(25,26)
print("getUTCMinutes : " + d.getUTCMinutes())
print("getUTCSeconds : " + d.getUTCSeconds())

d.setUTCMinutes(27,28,29)
print("getUTCMinutes : " + d.getUTCMinutes())
print("getUTCSeconds : " + d.getUTCSeconds())
print("getUTCMilliseconds : " + d.getUTCMilliseconds())


d.setHours(2)
print("getHours : " + d.getHours())

d.setHours(3, 1)
print("getHours : " + d.getHours())
print("getMinutes : " + d.getMinutes())

d.setHours(4, 2, 3)
print("getHours : " + d.getHours())
print("getMinutes : " + d.getMinutes())
print("getSeconds : " + d.getSeconds())

d.setHours(5, 6, 7, 8)
print("getHours : " + d.getHours())
print("getMinutes : " + d.getMinutes())
print("getSeconds : " + d.getSeconds())
print("getMilliseconds : " + d.getMilliseconds());


d.setUTCHours(2)
print("getUTCHours : " + d.getUTCHours())

d.setUTCHours(3, 1)
print("getUTCHours : " + d.getUTCHours())
print("getUTCMinutes : " + d.getUTCMinutes())

d.setUTCHours(4, 2, 3)
print("getUTCHours : " + d.getUTCHours())
print("getUTCMinutes : " + d.getUTCMinutes())
print("getUTCSeconds : " + d.getUTCSeconds())

d.setUTCHours(5, 6, 7, 8)
print("getUTCHours : " + d.getUTCHours())
print("getUTCMinutes : " + d.getUTCMinutes())
print("getUTCSeconds : " + d.getUTCSeconds())
print("getUTCMilliseconds : " + d.getUTCMilliseconds());


d.setDate(1000);
print("getDate : " + d.getDate())


d.setUTCDate(2000)
print("getUTCDate : " + d.getUTCDate())


d.setMonth(7)
print("getMonth : " + d.getMonth())

d.setMonth(8, 3000)
print("getMonth : " + d.getMonth())
print("getDate : " + d.getDate())


d.setUTCMonth(7)
print("getUTCMonth : " + d.getUTCMonth())

d.setUTCMonth(8, 3000)
print("getUTCMonth : " + d.getUTCMonth())
print("getUTCDate : " + d.getUTCDate())


d.setFullYear(2009)
print("getFullYear : " + d.getFullYear())


d.setYear(2009)
print("getYear : " + d.getYear())

d.setFullYear(2010, 10)
print("getFullYear : " + d.getFullYear())
print("getMonth : " + d.getMonth())

d.setFullYear(2011, 11, 1234)
print("getFullYear : " + d.getFullYear())
print("getMonth : " + d.getMonth())
print("getDate : " + d.getDate())


d.setUTCFullYear(2009)
print("getUTCFullYear : " + d.getUTCFullYear())

d.setUTCFullYear(2010, 10)
print("getUTCFullYear : " + d.getUTCFullYear())
print("getUTCMonth : " + d.getUTCMonth())

d.setUTCFullYear(2011, 11, 1234)
print("getUTCFullYear : " + d.getUTCFullYear())
print("getUTCMonth : " + d.getUTCMonth())
print("getUTCDate : " + d.getUTCDate())

d.setDate(12345678);
print("toUTCString : " + d.toUTCString())
print("valueOf : " + d.valueOf())

print("toISOString method : " + typeof d.toISOString);
print("toJSON method : " + typeof d.toJSON);

print("..\\UnitTestFramework\\UnitTestFramework.js", "self");

print(() => Date.prototype.setYear(5), TypeError);
print(() => Date.prototype.getFullYear(), TypeError);
print(() => Date.prototype.setYear(4, 4), TypeError);
print(() => Date.prototype.getMonth(), TypeError);
print(() => Date.prototype.setFullYear(1999), TypeError);
print(() => Date.prototype.setFullYear(1998, 5), TypeError);
