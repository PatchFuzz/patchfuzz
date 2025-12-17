function test0() {
    var ui8 = new Uint8Array(256);
    this.prop0 = 1;
    if(this.prop0) {
        
        (function() {
            function foo() {
                eval("");
                function bar() {
                    foo();

                }
            };

        })();
    }
    var __loopvar1 = 0;
    for(var strvar0 in ui8) {
        if(strvar0.indexOf('method') != -1) continue;
        if(__loopvar1++ > 3) break;
        ui8[strvar0] = (1, 1, 1, 1, (-2144361518.9 - this.prop0), this.prop0);
        1
    }
};
test0();
test0();

print("pass");
