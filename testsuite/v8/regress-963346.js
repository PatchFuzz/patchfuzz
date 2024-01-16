





var o = ['3'];
function foo(i) { o.x = i; }
foo("string");
Object.preventExtensions(o);
Object.seal(o);
print('foo');
foo(0);
%HeapObjectVerify(o);
assertEquals(o.x, 0);
