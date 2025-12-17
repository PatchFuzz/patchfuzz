try{} catch (x) {}

var callStack = [];
function currentFunc() {
    return callStack[0];
}
function reportFailure () {
    var funcName = currentFunc();
    
    var prefix = (funcName) ? funcName : "";
    
    for (var i=0; i < 50; i++) ;
}

callStack[0] = 'test';

reportFailure();
callStack[0] = undefined;

reportFailure();
