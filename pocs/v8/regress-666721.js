function len0(a) { return a.length; }
function len1(a) { return a.length; }
function len2(a) { return a.length; }
function len3(a) { return a.length; }

print(0, len0([]));
print(1, len0({length:1}));
print(2, len0([1,2]));
print(3, len0('123'));

print(0, len1(''));
print(1, len1({length:1}));
print(2, len1('12'));
print(3, len1([1,2,3]));

print(0, len2({length:0}));
print(1, len2([1]));
print(2, len2({length:2}));
print(3, len2([1,2,3]));
print(4, len2('1234'));

print(0, len3({length:0}));
print(1, len3('1'));
print(2, len3({length:2}));
print(3, len3('123'));
print(4, len3([1,2,3,4]));
