




























var re = /.+/g;
re.exec("");
re.exec("anystring");
re=/.+/g;
re.exec("");
assertEquals(0, re.lastIndex);
