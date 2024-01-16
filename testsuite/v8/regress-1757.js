




























var a = "internalized dummy";
a = "abcdefghijklmnopqrstuvqxy"+"z";
externalizeString(a, true);
assertEquals('b', a.substring(1).charAt(0));
