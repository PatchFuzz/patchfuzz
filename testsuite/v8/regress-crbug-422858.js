



var date = new Date("2016/01/02 10:00 GMT-8")
assertEquals(0, date.getUTCMinutes());
assertEquals(18, date.getUTCHours());

date = new Date("2016/01/02 10:00 GMT-12")
assertEquals(0, date.getUTCMinutes());
assertEquals(22, date.getUTCHours());

date = new Date("2016/01/02 10:00 GMT-123")
assertEquals(23, date.getUTCMinutes());
assertEquals(11, date.getUTCHours());

date = new Date("2016/01/02 10:00 GMT-0856")
assertEquals(56, date.getUTCMinutes());
assertEquals(18, date.getUTCHours());

date = new Date("2016/01/02 10:00 GMT-08000")
assertEquals(NaN, date.getUTCMinutes());
assertEquals(NaN, date.getUTCHours());
