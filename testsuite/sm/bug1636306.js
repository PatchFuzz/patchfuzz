

oomTest(() => { eval(`
    function getCallee() { return getCallee.caller; }

    
    
    let fn = function(x) {
        if (x) {
            
            let _ = function() {
                function inner() {}
            }();

            
            for (var i = 0; i < 2; i++) {
                let _ = function() {
                    function inner() {}
                }();
            }
        }

        return getCallee();
    }(false);

    
    
    for (var i = 0; i < 2; i++) {
        try { fn(true); }
        catch (e) { }
    }
`)});
