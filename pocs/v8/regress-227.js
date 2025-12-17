var re = /\u23a1|x/;
var res = re.exec("!");
print(null, res, "Throwing away high bits on ASCII string");

res = re.exec("!x");
print(["x"], res, "Throwing away high bits on ASCII string");
