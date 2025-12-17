(function(index) {
    var o = {
        [index]: function() {}
    };

    
    
    print(o[index].name, String(index));

    
    if (index === 0) {
        (function self() {
            self.caller(1);
        })();
    }
})(0);
