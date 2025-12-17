var a = [];
a[8192] = '';
print(%HasDictionaryElements(a));
var uc16 = '\u0094';
var test = uc16;
for (var i = 0; i < 13; i++) test += test;
print(test, a.join(uc16));
