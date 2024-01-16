load(libdir + "asserts.js");

function test() {
    var plainDataProperty = {
        value: 0, enumerable: true, configurable: true, writable: true
    };
    var nonEnumerableProperty = {
        value: 0, enumerable: false, configurable: true, writable: true
    };
    var nonConfigurableProperty = {
        value: 0, enumerable: true, configurable: false, writable: true
    };
    var n = 5000;
    for (var i = 0; i < n; ++i) {
        var obj = {};

        
        
        Object.defineProperty(obj, "bar" + i, nonEnumerableProperty);

        
        
        
        Object.defineProperty(obj, "foo", plainDataProperty);

        
        var desc = (i + 1 !== n) ? plainDataProperty : nonConfigurableProperty;
        Object.defineProperty(obj, "foo", desc);

        
        
        
        
        Object.defineProperty(obj, "foo", plainDataProperty);
    }
}

for (var i = 0; i < 2; ++i) {
    assertThrowsInstanceOf(test, TypeError);
}
