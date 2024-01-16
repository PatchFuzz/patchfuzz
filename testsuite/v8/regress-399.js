




























var date = new Date(1.009804e12);
var year = Number(String(date).match(/.*(200\d)/)[1]);
assertEquals(year, date.getFullYear());
