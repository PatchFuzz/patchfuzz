(function(index) {
    var fn = function(a) {};

    
    
    print(fn.length, 1);

    
    if (index === 0) {
        (function self() {
            self.caller(1);
        })();
    }
})(0);
