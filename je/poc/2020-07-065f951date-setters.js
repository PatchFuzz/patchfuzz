













var ms = 1;
var sec = 1000 * ms;
var min = 60 * sec;
var hour = 60 * min;
var day = 24 * hour; 
var d = new Date();


print(d.setTime(0) == 0);
d.setTime(0);
print(d.setTime(day) == day);
print(d.getDate() == 2);


d.setTime(0);
print(d.setMilliseconds(1) == ms);
print(d.getMilliseconds() == 1);


d.setTime(0);
print(d.setUTCMilliseconds(1) == ms);
print(d.getUTCMilliseconds() == 1);


d.setTime(0);
print(d.setSeconds(1) == sec);
print(d.getSeconds() == 1);
d.setTime(0);
print(d.setSeconds(1, 1) == sec + ms);
print(d.getSeconds() == 1);
print(d.getMilliseconds() == 1);


d.setTime(0);
print(d.setUTCSeconds(1) == sec);
print(d.getUTCSeconds() == 1);
d.setTime(0);
print(d.setUTCSeconds(1, 1) == sec + ms);
print(d.getUTCSeconds() == 1);
print(d.getUTCMilliseconds() == 1);


d.setTime(0);
print(d.setMinutes(1) == min);
print(d.getMinutes() == 1);
d.setTime(0);
print(d.setMinutes(1, 1) == min + sec);
print(d.getMinutes() == 1);
print(d.getSeconds() == 1);
d.setTime(0);
print(d.setMinutes(1, 1, 1) == min + sec + ms);
print(d.getMinutes() == 1);
print(d.getSeconds() == 1);
print(d.getMilliseconds() == 1);


d.setTime(0);
print(d.setUTCMinutes(1) == min);
print(d.getUTCMinutes() == 1);
d.setTime(0);
print(d.setUTCMinutes(1, 1) == min + sec);
print(d.getUTCMinutes() == 1);
print(d.getUTCSeconds() == 1);
d.setTime(0);
print(d.setUTCMinutes(1, 1, 1) == min + sec + ms);
print(d.getUTCMinutes() == 1);
print(d.getUTCSeconds() == 1);
print(d.getUTCMilliseconds() == 1);


d.setTime(0);
print(d.setHours(1) == hour + d.getTimezoneOffset() * 60000);
print(d.getHours() == 1);
d.setTime(0);
print(d.setHours(1, 1) == hour + min + d.getTimezoneOffset() * 60000);
print(d.getHours() == 1);
print(d.getMinutes() == 1);
d.setTime(0);
print(d.setHours(1, 1, 1) == hour + min + sec + d.getTimezoneOffset() * 60000);
print(d.getHours() == 1);
print(d.getMinutes() == 1);
print(d.getSeconds() == 1);
d.setTime(0);
print(d.setHours(1, 1, 1, 1) == hour + min + sec + ms + d.getTimezoneOffset() * 60000);
print(d.getHours() == 1);
print(d.getMinutes() == 1);
print(d.getSeconds() == 1);
print(d.getMilliseconds() == 1);


d.setTime(0);
print(d.setUTCHours(1) == hour);
print(d.getUTCHours() == 1);
d.setTime(0);
print(d.setUTCHours(1, 1) == hour + min);
print(d.getUTCHours() == 1);
print(d.getUTCMinutes() == 1);
d.setTime(0);
print(d.setUTCHours(1, 1, 1) == hour + min + sec);
print(d.getUTCHours() == 1);
print(d.getUTCMinutes() == 1);
print(d.getUTCSeconds() == 1);
d.setTime(0);
print(d.setUTCHours(1, 1, 1, 1) == hour + min + sec + ms);
print(d.getUTCHours() == 1);
print(d.getUTCMinutes() == 1);
print(d.getUTCSeconds() == 1);
print(d.getUTCMilliseconds() == 1);


d.setTime(0);
print(d.setDate(0) == -day);
print(d.getDate() == 31);
d.setTime(0);
print(d.setDate(1) == 0);
print(d.getDate() == 1);


d.setTime(0);
print(d.setUTCDate(0) == -day);
print(d.getUTCDate() == 31);
d.setTime(0);
print(d.setUTCDate(1) == 0);
print(d.getUTCDate() == 1);


d.setTime(0);
print(d.setMonth(0) == 0);
print(d.getMonth() == 0);
d.setTime(0);
print(d.setMonth(0, 0) == -day);
print(d.getMonth() == 11);
print(d.getDate() == 31);
d.setTime(0);
print(d.setMonth(1) == 31 * day);
print(d.getMonth() == 1);
d.setTime(0);
print(d.setMonth(12) == 365 * day);
print(d.getMonth() == 0);
d.setTime(0);
print(d.setMonth(13) == (365 + 31) * day);
print(d.getMonth() == 1);


d.setTime(0);
print(d.setUTCMonth(0) == 0);
print(d.getUTCMonth() == 0);
d.setTime(0);
print(d.setUTCMonth(0, 0) == -day);
print(d.getUTCMonth() == 11);
print(d.getUTCDate() == 31);
d.setTime(0);
print(d.setUTCMonth(1) == 31 * day);
print(d.getUTCMonth() == 1);
d.setTime(0);
print(d.setUTCMonth(12) == 365 * day);
print(d.getUTCMonth() == 0);
d.setTime(0);
print(d.setUTCMonth(13) == (365 + 31) * day);
print(d.getUTCMonth() == 1);


d.setTime(0);
print(d.setFullYear(0) == -62167219200000);
print(d.getFullYear() == 0);
d.setTime(0);
print(d.setFullYear(0, 0) == -62167219200000);
print(d.getFullYear() == 0);
print(d.getMonth() == 0);
d.setTime(0);
print(d.setFullYear(0, 0, 0) == -62167219200000 - day);
print(d.getFullYear() == -1);
print(d.getMonth() == 11);
print(d.getDate() == 31);
d.setTime(0);
print(d.setFullYear(1970) == 0);
print(d.getFullYear() == 1970);


d.setTime(0);
print(d.setUTCFullYear(0) == -62167219200000);
print(d.getUTCFullYear() == 0);
d.setTime(0);
print(d.setUTCFullYear(0, 0) == -62167219200000);
print(d.getUTCFullYear() == 0);
print(d.getUTCMonth() == 0);
d.setTime(0);
print(d.setUTCFullYear(0, 0, 0) == -62167219200000 - day);
print(d.getUTCFullYear() == -1);
print(d.getUTCMonth() == 11);
print(d.getUTCDate() == 31);
d.setTime(0);
print(d.setUTCFullYear(1970) == 0);
print(d.getUTCFullYear() == 1970);


d = new Date("1969-12-01T01:00:00.000Z");
d.setFullYear(1968);
print(d.toISOString() == "1968-12-01T01:00:00.000Z");

d = new Date("1970-01-31T01:00:00.000Z");
d.setFullYear(1971);
print(d.toISOString() == "1971-01-31T01:00:00.000Z");


d = new Date();
print(isNaN (d.setTime()));
print(isNaN (d.setMilliseconds()));
print(isNaN (d.setUTCMilliseconds()));
print(isNaN (d.setSeconds()));
print(isNaN (d.setUTCSeconds()));
print(isNaN (d.setMinutes()));
print(isNaN (d.setUTCMinutes()));
print(isNaN (d.setHours()));
print(isNaN (d.setUTCHours()));
print(isNaN (d.setDate()));
print(isNaN (d.getUTCDate()));
print(isNaN (d.setMonth()));
print(isNaN (d.setUTCMonth()));
print(isNaN (d.setFullYear()));
print(isNaN (d.setUTCFullYear()));
