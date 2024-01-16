





function Run(){

    function foo() {
        let a = "a";
        bar(a);
        a; 
    }

    function bar(a) {
        let b = "b";
        baz(a,b);
        b; 
    }

    function baz(a,b) {
        let c = "baz";
        c =  c + a + b; 
        c;
        
    }

    foo();
    WScript.Echo('PASSED');
}

Run();

