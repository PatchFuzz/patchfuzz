








(function(index) {
    var o = {
        [index]: function() {}
    };

    
    if (index === 0) {
        (function self() {
            self.caller(1);
        })();
    }
})(0);
