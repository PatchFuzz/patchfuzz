













var ms = 1;
var sec = 1000 * ms;
var min = 60 * sec;
var hour = 60 * min;
var day = 24 * hour; 
var d = new Date();


assert (d.setTime(0) == 0);
d.setTime(0);
assert (d.setTime(day) == day);
assert (d.getDate() == 2);


d.setTime(0);
assert (d.setMilliseconds(1) == ms);
assert (d.getMilliseconds() == 1);


d.setTime(0);
assert (d.setUTCMilliseconds(1) == ms);
assert (d.getUTCMilliseconds() == 1);


d.setTime(0);
assert (d.setSeconds(1) == sec);
assert (d.getSeconds() == 1);
d.setTime(0);
assert (d.setSeconds(1, 1) == sec + ms);
assert (d.getSeconds() == 1);
assert (d.getMilliseconds() == 1);


d.setTime(0);
assert (d.setUTCSeconds(1) == sec);
assert (d.getUTCSeconds() == 1);
d.setTime(0);
assert (d.setUTCSeconds(1, 1) == sec + ms);
assert (d.getUTCSeconds() == 1);
assert (d.getUTCMilliseconds() == 1);


d.setTime(0);
assert (d.setMinutes(1) == min);
assert (d.getMinutes() == 1);
d.setTime(0);
assert (d.setMinutes(1, 1) == min + sec);
assert (d.getMinutes() == 1);
assert (d.getSeconds() == 1);
d.setTime(0);
assert (d.setMinutes(1, 1, 1) == min + sec + ms);
assert (d.getMinutes() == 1);
assert (d.getSeconds() == 1);
assert (d.getMilliseconds() == 1);


d.setTime(0);
assert (d.setUTCMinutes(1) == min);
assert (d.getUTCMinutes() == 1);
d.setTime(0);
assert (d.setUTCMinutes(1, 1) == min + sec);
assert (d.getUTCMinutes() == 1);
assert (d.getUTCSeconds() == 1);
d.setTime(0);
assert (d.setUTCMinutes(1, 1, 1) == min + sec + ms);
assert (d.getUTCMinutes() == 1);
assert (d.getUTCSeconds() == 1);
assert (d.getUTCMilliseconds() == 1);


d.setTime(0);
assert (d.setHours(1) == hour + d.getTimezoneOffset() * 60000);
assert (d.getHours() == 1);
d.setTime(0);
assert (d.setHours(1, 1) == hour + min + d.getTimezoneOffset() * 60000);
assert (d.getHours() == 1);
assert (d.getMinutes() == 1);
d.setTime(0);
assert (d.setHours(1, 1, 1) == hour + min + sec + d.getTimezoneOffset() * 60000);
assert (d.getHours() == 1);
assert (d.getMinutes() == 1);
assert (d.getSeconds() == 1);
d.setTime(0);
assert (d.setHours(1, 1, 1, 1) == hour + min + sec + ms + d.getTimezoneOffset() * 60000);
assert (d.getHours() == 1);
assert (d.getMinutes() == 1);
assert (d.getSeconds() == 1);
assert (d.getMilliseconds() == 1);


d.setTime(0);
assert (d.setUTCHours(1) == hour);
assert (d.getUTCHours() == 1);
d.setTime(0);
assert (d.setUTCHours(1, 1) == hour + min);
assert (d.getUTCHours() == 1);
assert (d.getUTCMinutes() == 1);
d.setTime(0);
assert (d.setUTCHours(1, 1, 1) == hour + min + sec);
assert (d.getUTCHours() == 1);
assert (d.getUTCMinutes() == 1);
assert (d.getUTCSeconds() == 1);
d.setTime(0);
assert (d.setUTCHours(1, 1, 1, 1) == hour + min + sec + ms);
assert (d.getUTCHours() == 1);
assert (d.getUTCMinutes() == 1);
assert (d.getUTCSeconds() == 1);
assert (d.getUTCMilliseconds() == 1);


d.setTime(0);
assert (d.setDate(0) == -day);
assert (d.getDate() == 31);
d.setTime(0);
assert (d.setDate(1) == 0);
assert (d.getDate() == 1);


d.setTime(0);
assert (d.setUTCDate(0) == -day);
assert (d.getUTCDate() == 31);
d.setTime(0);
assert (d.setUTCDate(1) == 0);
assert (d.getUTCDate() == 1);


d.setTime(0);
assert (d.setMonth(0) == 0);
assert (d.getMonth() == 0);
d.setTime(0);
assert (d.setMonth(0, 0) == -day);
assert (d.getMonth() == 11);
assert (d.getDate() == 31);
d.setTime(0);
assert (d.setMonth(1) == 31 * day);
assert (d.getMonth() == 1);
d.setTime(0);
assert (d.setMonth(12) == 365 * day);
assert (d.getMonth() == 0);
d.setTime(0);
assert (d.setMonth(13) == (365 + 31) * day);
assert (d.getMonth() == 1);


d.setTime(0);
assert (d.setUTCMonth(0) == 0);
assert (d.getUTCMonth() == 0);
d.setTime(0);
assert (d.setUTCMonth(0, 0) == -day);
assert (d.getUTCMonth() == 11);
assert (d.getUTCDate() == 31);
d.setTime(0);
assert (d.setUTCMonth(1) == 31 * day);
assert (d.getUTCMonth() == 1);
d.setTime(0);
assert (d.setUTCMonth(12) == 365 * day);
assert (d.getUTCMonth() == 0);
d.setTime(0);
assert (d.setUTCMonth(13) == (365 + 31) * day);
assert (d.getUTCMonth() == 1);


d.setTime(0);
assert (d.setFullYear(0) == -62167219200000);
assert (d.getFullYear() == 0);
d.setTime(0);
assert (d.setFullYear(0, 0) == -62167219200000);
assert (d.getFullYear() == 0);
assert (d.getMonth() == 0);
d.setTime(0);
assert (d.setFullYear(0, 0, 0) == -62167219200000 - day);
assert (d.getFullYear() == -1);
assert (d.getMonth() == 11);
assert (d.getDate() == 31);
d.setTime(0);
assert (d.setFullYear(1970) == 0);
assert (d.getFullYear() == 1970);


d.setTime(0);
assert (d.setUTCFullYear(0) == -62167219200000);
assert (d.getUTCFullYear() == 0);
d.setTime(0);
assert (d.setUTCFullYear(0, 0) == -62167219200000);
assert (d.getUTCFullYear() == 0);
assert (d.getUTCMonth() == 0);
d.setTime(0);
assert (d.setUTCFullYear(0, 0, 0) == -62167219200000 - day);
assert (d.getUTCFullYear() == -1);
assert (d.getUTCMonth() == 11);
assert (d.getUTCDate() == 31);
d.setTime(0);
assert (d.setUTCFullYear(1970) == 0);
assert (d.getUTCFullYear() == 1970);


d = new Date("1969-12-01T01:00:00.000Z");
d.setFullYear(1968);
assert (d.toISOString() == "1968-12-01T01:00:00.000Z");

d = new Date("1970-01-31T01:00:00.000Z");
d.setFullYear(1971);
assert (d.toISOString() == "1971-01-31T01:00:00.000Z");


d = new Date();
assert (isNaN (d.setTime()));
assert (isNaN (d.setMilliseconds()));
assert (isNaN (d.setUTCMilliseconds()));
assert (isNaN (d.setSeconds()));
assert (isNaN (d.setUTCSeconds()));
assert (isNaN (d.setMinutes()));
assert (isNaN (d.setUTCMinutes()));
assert (isNaN (d.setHours()));
assert (isNaN (d.setUTCHours()));
assert (isNaN (d.setDate()));
assert (isNaN (d.getUTCDate()));
assert (isNaN (d.setMonth()));
assert (isNaN (d.setUTCMonth()));
assert (isNaN (d.setFullYear()));
assert (isNaN (d.setUTCFullYear()));
