(function(index) {
    var fn = function() {};

    
    
    print(fn.name, "fn");

    
    if (index === 0) {
        (function self() {
            self.caller(1);
        })();
    }
})(0);
