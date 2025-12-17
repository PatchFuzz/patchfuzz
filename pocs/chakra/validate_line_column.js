function foo(validate) {
    try {
        validate();
    } catch (e) {
        print(e.stack);
    }
}

foo(function() {
    ([z1]);         
});

foo(function() {
    ({a:z1});         
});

foo(function() {
    var a;
    a;class b extends ([]){};    
});

foo(function() {
    (typeof a.b);         
});

foo(function() {
    var k = 1;
    !a.b;         
});

foo(function() {
    var k = 1;
    ~a.b;         
});

foo(function() {
    var k = 1;
    (a.b && a.b);          
});

foo(function() {
    var k = 1;
    (a.b || a.b);         
});

foo(function() {
    var k = 1;
    (a.b * a.b);         
});

foo(function() {
    var k = 1;
    `${a.b}`;         
});

foo(function() {
    var k = 1;
    while(unresolved[0]) {   
        break;
    }
});

foo(function() {
    var k = 1;
    while(typeof unresolved[0]) {   
        break;
    }
});

foo(function() {
    var k = 1;
    while(unresolved instanceof blah) {   
        break;
    }
});
