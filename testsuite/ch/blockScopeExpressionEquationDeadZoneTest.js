







function test() {    
    
    let a = 0;
    
    a;
    
    const c = 1;
    
    var b = 1;
    var d = "abc";
    
    if (b == 1) {
        a;
        a;
        a;
        let b = 22;
        b;
        b;
    }
    if (b == 1) {
        a;
        a;
        a;
        a;
        a;
        a;
        const d = 33;
        d;
        d;
    }
};

test();
WScript.Echo("Pass");