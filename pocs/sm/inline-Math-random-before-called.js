function ionCompiledEagerly() {
    Math.random; 
    return function() {
        return +Math.random(); 
    };
}

var alreadyIonCompiled = ionCompiledEagerly();
print(alreadyIonCompiled() < 1, true);
