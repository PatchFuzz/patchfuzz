




























var a = [];
a[8192] = '';
assertTrue(%HasDictionaryElements(a));
var uc16 = '\u0094';
var test = uc16;
for (var i = 0; i < 13; i++) test += test;
assertEquals(test, a.join(uc16));
