var max = 40;
setJitCompilerOption("ion.warmup.trigger", max - 10);


gczeal(0);

function selfhosted() {
    if (typeof getSelfHostedValue === "undefined")
        return;

    var NewStringIterator = getSelfHostedValue("NewStringIterator");
    var iter = NewStringIterator();
    bailout();
    
}

function iterator(i) {
    var string = String.fromCharCode(0x41, i);
    var iter = string[Symbol.iterator]();
    assertEq(iter.next().value, 'A');
    bailout();
    
    
    var result = iter.next();
    assertEq(result.value, String.fromCharCode(i));
    assertEq(result.done, false);
    assertEq(iter.next().done, true);
}

function forof(i) {
    var string = String.fromCharCode(0x41, i);
    var first = true;

    for (var x of string) {
        if (first) {
            assertEq(x, 'A');
            bailout();
            first = false;
        } else {
            assertEq(x, String.fromCharCode(i));
        }
    }
}

var data = {
  a: 'foo',
  b: {c: 'd'},
  str: 'ABC'
};

function fn() {
  var {a, b:{c:b}, str:[, c]} = data;
  return c;
}

function destructuring() {
    for (var i = 0; i < max; i++)
        assertEq(fn(), 'B');
}

for (var i = 0; i < max; i++) {
    selfhosted();
    iterator(i);
    forof(i);
    destructuring();
}
