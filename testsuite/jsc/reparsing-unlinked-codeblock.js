

function shouldBe(actual, expected) {
    if (actual !== expected)
        throw new Error('bad value: ' + actual);
}

function hello()
{
    return (function () {
        function world() {
            return 42;
        };
        return world();
    }());
}


shouldBe(hello(), 42);
var first = $vm.parseCount();

for (var i = 0; i < 20; ++i)
    fullGC();

shouldBe(hello(), 42);
var second = $vm.parseCount() - first;
shouldBe(second >= 3, true); 
