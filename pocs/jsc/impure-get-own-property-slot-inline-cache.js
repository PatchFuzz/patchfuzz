var createImpureGetter = print;
var setImpureGetterDelegate = print;

var ig = createImpureGetter(null);
ig.x = 42;

var foo = function(o) {
    return o.x;
};

noInline(foo);

for (var i = 0; i < testLoopCount; ++i)
    foo(ig);

setImpureGetterDelegate(ig, {x:"x"});

if (foo(ig) !== "x")
    throw new Error("Incorrect result!");
