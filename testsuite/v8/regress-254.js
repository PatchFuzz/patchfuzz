





























var re = /x/g;

assertEquals(0, re.lastIndex, "Global, initial lastIndex");

assertTrue(re.test("x"), "Global, test 1");
assertEquals(1, re.lastIndex, "Global, lastIndex after test 1");
assertFalse(re.test("x"), "Global, test 2");
assertEquals(0, re.lastIndex, "Global, lastIndex after test 2");

assertEquals(["x"], re.exec("x"), "Global, exec 1");
assertEquals(1, re.lastIndex, "Global, lastIndex after exec 1");
assertEquals(null, re.exec("x"), "Global, exec 2");
assertEquals(0, re.lastIndex, "Global, lastIndex after exec 2");


var re2 = /x/;

assertEquals(0, re2.lastIndex, "Non-global, initial lastIndex");

assertTrue(re2.test("x"), "Non-global, test 1");
assertEquals(0, re2.lastIndex, "Non-global, lastIndex after test 1");
assertTrue(re2.test("x"), "Non-global, test 2");
assertEquals(0, re2.lastIndex, "Non-global, lastIndex after test 2");

assertEquals(["x"], re2.exec("x"), "Non-global, exec 1");
assertEquals(0, re2.lastIndex, "Non-global, lastIndex after exec 1");
assertEquals(["x"], re2.exec("x"), "Non-global, exec 2");
assertEquals(0, re2.lastIndex, "Non-global, lastIndex after exec 2");
