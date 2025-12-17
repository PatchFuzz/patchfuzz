(function(index) {
    var o = {
        [index]: class {
            constructor() {}

            
            
            static [(index === 0 ? "not-name" : "name")]() {}
        }
    }

    
    print(displayName(o[index]), String(index));

    if (index === 0) {
        (function self() {
            self.caller(1);
        })();
    }
})(0);
