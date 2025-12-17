var date = new Date("2016/01/02 10:00 GMT-8")
print(0, date.getUTCMinutes());
print(18, date.getUTCHours());

date = new Date("2016/01/02 10:00 GMT-12")
print(0, date.getUTCMinutes());
print(22, date.getUTCHours());

date = new Date("2016/01/02 10:00 GMT-123")
print(23, date.getUTCMinutes());
print(11, date.getUTCHours());

date = new Date("2016/01/02 10:00 GMT-0856")
print(56, date.getUTCMinutes());
print(18, date.getUTCHours());

date = new Date("2016/01/02 10:00 GMT-08000")
print(NaN, date.getUTCMinutes());
print(NaN, date.getUTCHours());
