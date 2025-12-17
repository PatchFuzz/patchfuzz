var max = 40;
setJitCompilerOption("ion.warmup.trigger", max - 10);


gczeal(0);

function selfhosted() {
    if (typeof getSelfHostedValue === "undefined")
        return;

    var NewArrayIterator = getSelfHostedValue("NewArrayIterator");
    var iter = NewArrayIterator();
    bailout();
    
}

function iterator(i) {
    var array = [1, i];
    var iter = array[Symbol.iterator]();
    print(iter.next().value, 1);
    bailout();
    
    
    var result = iter.next();
    print(result.value, i);
    print(result.done, false);
    print(iter.next().done, true);
}

function forof(i) {
    var array = [1, i];
    var first = true;

    for (var x of array) {
        if (first) {
            print(x, 1);
            bailout();
            first = false;
        } else {
            print(x, i);
        }
    }
}

var data = {
  a: 'foo',
  b: {c: 'd'},
  arr: [1, 2, 3]
};

function fn() {
  var {a, b:{c:b}, arr:[, c]} = data;
  return c;
}

function destructuring() {
    for (var i = 0; i < max; i++)
        print(fn(), 2);
}

for (var i = 0; i < max; i++) {
    selfhosted();
    iterator(i);
    forof(i);
    destructuring();
}
