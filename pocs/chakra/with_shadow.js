function f1() {
    var a = 20;

    var x = {
        a: "with_a",
        b: function b() { },            
        __proto__: {
            b: "proto_b",               
            c: "proto_c",               
            d: function proto_d() { },  
            __proto__: {
                e: "ancestor_e"
            }
        }
    };
    Object.defineProperty(x.__proto__.__proto__, "f", { value: "ancestor_f", enumerable: false }); 

    with (x) {
        var k = a;              
        k;                      
    }
    
    return a;
}

f1();

with ({ outer3: "outer3" }) {
    (function foo() {
        var foo1 = "foo1";

        with ({ outer2: "outer2" }) {
            with ({ outer1: "outer1" }) {
                (function () {
                    foo1; foo;
                    
                }).apply({});
            }
        }
    })();
}

print("Pass");
