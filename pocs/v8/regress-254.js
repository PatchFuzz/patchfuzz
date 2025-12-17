var re = /x/g;

print(0, re.lastIndex, "Global, initial lastIndex");

print(re.test("x"), "Global, test 1");
print(1, re.lastIndex, "Global, lastIndex after test 1");
print(re.test("x"), "Global, test 2");
print(0, re.lastIndex, "Global, lastIndex after test 2");

print(["x"], re.exec("x"), "Global, exec 1");
print(1, re.lastIndex, "Global, lastIndex after exec 1");
print(null, re.exec("x"), "Global, exec 2");
print(0, re.lastIndex, "Global, lastIndex after exec 2");


var re2 = /x/;

print(0, re2.lastIndex, "Non-global, initial lastIndex");

print(re2.test("x"), "Non-global, test 1");
print(0, re2.lastIndex, "Non-global, lastIndex after test 1");
print(re2.test("x"), "Non-global, test 2");
print(0, re2.lastIndex, "Non-global, lastIndex after test 2");

print(["x"], re2.exec("x"), "Non-global, exec 1");
print(0, re2.lastIndex, "Non-global, lastIndex after exec 1");
print(["x"], re2.exec("x"), "Non-global, exec 2");
print(0, re2.lastIndex, "Non-global, lastIndex after exec 2");
