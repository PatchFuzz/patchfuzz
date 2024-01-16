
str = "a";
for (var i = 0; i < 20; ++i)
    str = str + str;
str.indexOf('a');

var f;
f = makeFinalizeObserver();
assertEq(finalizeCount(), 0);



f = makeFinalizeObserver();


for (var i = 0; i < 80; ++i)
    str.replace(/(a)/, '$1');

