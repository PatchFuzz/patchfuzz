









Number.prototype.nump = "numv";
Number.prototype[1] = "Number.p[1]";
Number.prototype[2] = 2;
Boolean.prototype[1] = "Boolean.p[1]";
Boolean.prototype[2] = 2;
String.prototype[1] = "String.p[1]";
String.prototype[2] = 2;
Object.prototype[99] = "Object.p[99]";




(function foo() {
    var a = {};
    
})();




var not_used = 0; 





(function foo() {
    var data = [null, undefined, 12, false, "abc", new String("def"), [3, 4, 5], new Int8Array([0, 1, 2, 3, 0, -1, -2, -3]), { thisp: "thisv" }];
    

    data.forEach(function (v) {
        v;
        not_used = 0;
        
        not_used = 0;

        (function () {
            var x;
            
        }).apply(v);
    });
})();




(function foo() {
    

    
    (function (x) {
        x;
        
    }).apply({}, [12, 13]);

    
    (function (x) {
        delete arguments[1];
        x;
        
    }).apply({}, [12, 13]);
})();




(function foo(x) {
    var a = {
        a1: "a1",
        a2: {
            a21: "a21",
            "1": 0
        },
        a3: [0, 1, 2, , 4],
        "1": 1,
        "2": 2,
        "true": true,
        "undefined": "undef",
        __proto__: {ap: "ap"}
    };
    Object.defineProperty(a, "ah", { value: "non-enum", enumerable: false });
    Object.defineProperty(a.__proto__, "aph", { value: "non-enum", enumerable: false });
    Object.defineProperty(a, "getn", { get: function() { return "getv"; }, enumerable: false });
    this.true = "this_true";

    a;

    
}).apply({thisp: "thisv"}, [12, 13]);




(function foo(x) {
    var a = [0, , 2, 3];
    

    for (var i = 0; i < a.length; i++) {
        (function () {
            a[i];
            
        })();
    }

    
}).apply({ thisp: "thisv" }, [12, 13]);




(function foo() {
    

    var a = [0, , 2, 3];
    
    var a = "abcd";
    
    var a = new String("efgh"); a[11] = 11;
    
    var a = new Uint8Array([1, 2, 3, 4]);
    

}).apply({});


WScript.Echo("pass");
