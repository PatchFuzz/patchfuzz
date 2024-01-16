


























var date = new Date();
var year = date.getYear();
date.setMilliseconds(Number.NaN);
date.setYear(1900 + year);
assertEquals(year, date.getYear());
assertEquals(0, date.getMonth());
assertEquals(1, date.getDate());
assertEquals(0, date.getHours());
assertEquals(0, date.getMinutes());
assertEquals(0, date.getSeconds());
assertEquals(0, date.getMilliseconds());
