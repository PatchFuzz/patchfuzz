





































var re = /a/g;

var str = "bbbbabbbbabbbb";



re.test(str);
assertEquals(5, re.lastIndex);

re.lastIndex = 0;
re.test(str);
assertEquals(5, re.lastIndex);  

re.lastIndex = 0;
re.test(str);
assertEquals(5, re.lastIndex);  



re = /a/g;

re.exec(str);
assertEquals(5, re.lastIndex);

re.lastIndex = 0;
re.exec(str);
assertEquals(5, re.lastIndex);  

re.lastIndex = 0;
re.exec(str);
assertEquals(5, re.lastIndex);  
