var re = /a/g;

var str = "bbbbabbbbabbbb";



re.test(str);
print(5, re.lastIndex);

re.lastIndex = 0;
re.test(str);
print(5, re.lastIndex);  

re.lastIndex = 0;
re.test(str);
print(5, re.lastIndex);  



re = /a/g;

re.exec(str);
print(5, re.lastIndex);

re.lastIndex = 0;
re.exec(str);
print(5, re.lastIndex);  

re.lastIndex = 0;
re.exec(str);
print(5, re.lastIndex);  
