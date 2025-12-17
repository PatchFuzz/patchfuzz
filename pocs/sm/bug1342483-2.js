function f() {
    
    {
        
        function g() {}
        var h = [() => g];

        
        for (;;) { break; }

        
        throw h[0];
    }
}

f();
