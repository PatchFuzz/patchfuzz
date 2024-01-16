


























var re = /\u23a1|x/;
var res = re.exec("!");
assertEquals(null, res, "Throwing away high bits on ASCII string");

res = re.exec("!x");
assertEquals(["x"], res, "Throwing away high bits on ASCII string");
