function foo() {
    var o = { a: 1 };
    
    
    delete o.a;

    o["b"] = 10;
    o["c"] = 20;

    
    
    o["constructor"] = undefined;

    o;
    
};
var o = { };
foo.call(o);

print("pass");
