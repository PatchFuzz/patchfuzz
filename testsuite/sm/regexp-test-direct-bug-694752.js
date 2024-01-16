function whoo() {
    
    assertEq(/foo.*baz/.test('foobarbaz'), true);
}

var orig_test = RegExp.prototype.test
for (var i = 0; i < 50; ++i)
    whoo();
eval('RegExp.prototype.test = function(str) { return orig_test.call(this, str) }')
for (var i = 0; i < 50; ++i)
    whoo();
RegExp.prototype.test = orig_test;
gc();
whoo();

