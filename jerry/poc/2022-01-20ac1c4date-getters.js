














var d = new Date(2015, 6, 9, 12, 13, 14, 121);

print(d.getFullYear() == 2015);
print(d.getUTCFullYear() == 2015);
print(d.getMonth() == 6);
print(d.getUTCMonth() == 6);
print(d.getDate() == 9);
print(d.getUTCDate() == 9);
print(d.getDay() == 4);
print(d.getUTCDay() == 4);
print(d.getHours() == 12);
print(d.getUTCHours() == (12 + d.getTimezoneOffset() / 60));
print(d.getMinutes() == 13);
print(d.getUTCMinutes() == 13);
print(d.getSeconds() == 14);
print(d.getUTCSeconds() == 14);
print(d.getMilliseconds() == 121);
print(d.getUTCMilliseconds() == 121);


var d = new Date("2015-07-09T12:13:14.121+01:30");

print(d.getFullYear() == 2015);
print(d.getUTCFullYear() == 2015);
print(d.getMonth() == 6);
print(d.getUTCMonth() == 6);
print(d.getDate() == 9);
print(d.getUTCDate() == 9);
print(d.getDay() == 4);
print(d.getUTCDay() == 4);
print(d.getHours() == Math.floor(12 - 1.5 - d.getTimezoneOffset() / 60));
print(d.getUTCHours() == Math.floor(12 - 1.5));
print(d.getMinutes() == 43);
print(d.getUTCMinutes() == 43);
print(d.getSeconds() == 14);
print(d.getUTCSeconds() == 14);
print(d.getMilliseconds() == 121);
print(d.getUTCMilliseconds() == 121);


var d = new Date(0);

print(d.getFullYear() == 1970);
print(d.getUTCFullYear() == 1970);
print(d.getMonth() == 0);
print(d.getUTCMonth() == 0);
print(d.getDate() == 1);
print(d.getUTCDate() == 1);
print(d.getDay() == 4);
print(d.getUTCDay() == 4);
print(d.getHours() == 0 - (d.getTimezoneOffset() / 60));
print(d.getUTCHours() == 0);
print(d.getMinutes() == 0);
print(d.getUTCMinutes() == 0);
print(d.getSeconds() == 0);
print(d.getUTCSeconds() == 0);
print(d.getMilliseconds() == 0);
print(d.getUTCMilliseconds() == 0);


var d = new Date("abcd");
print(isNaN (d));

print(isNaN (d.getFullYear()));
print(isNaN (d.getUTCFullYear()));
print(isNaN (d.getMonth()));
print(isNaN (d.getUTCMonth()));
print(isNaN (d.getDate()));
print(isNaN (d.getUTCDate()));
print(isNaN (d.getDay()));
print(isNaN (d.getUTCDay()));
print(isNaN (d.getHours()));
print(isNaN (d.getUTCHours()));
print(isNaN (d.getMinutes()));
print(isNaN (d.getUTCMinutes()));
print(isNaN (d.getSeconds()));
print(isNaN (d.getUTCSeconds()));
print(isNaN (d.getMilliseconds()));
print(isNaN (d.getUTCMilliseconds()));
print(isNaN (d.getTimezoneOffset()));


print(new Date(2013, -1).getMonth() === 11);
print(new Date(-2, -2).getFullYear() === -3);
print(new Date(-1, -1).getFullYear() === -2);
print(new Date(-1, -1, -1).getMonth() === 10);
print(new Date(-1, -1, -1, -1).getDate() === 28);
print(new Date(-1, -1, -1, -1, -1).getHours() === 22);
print(new Date(-1, -1, -1, -1, -1, -1).getMinutes() === 58);
print(new Date(-1, -1, -1, -1, -1, -1, -1).getSeconds() === 58);
print(new Date(-1, -1, -1, -1, -1, -1, -1, -1).getMilliseconds() === 999);
