







(function(index) {
    var fn = function(a) {};

    
    
    assertEq(fn.length, 1);

    
    if (index === 0) {
        (function self() {
            self.caller(1);
        })();
    }
})(0);
