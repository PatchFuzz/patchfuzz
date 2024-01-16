

function ionCompiledEagerly() {
    Math.random; 
    return function() {
        return +Math.random(); 
    };
}

var alreadyIonCompiled = ionCompiledEagerly();
assertEq(alreadyIonCompiled() < 1, true);
