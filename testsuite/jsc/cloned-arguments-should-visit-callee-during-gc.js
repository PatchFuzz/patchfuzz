



var cachedArguments = [];
var numberOfEntries = 1000;

function makeTransientFunction(i) {
    function transientFunc() {
        cachedArguments[i] = transientFunc.arguments;
    }
    return transientFunc;
}

for (i = 0; i < numberOfEntries; i++) {
    var transientFunc = makeTransientFunction(i);
    transientFunc();
    
    
}

gc();



for (i = 0; i < numberOfEntries; i++) {
    new Object();
}

for (i = 0; i < numberOfEntries; i++) {
    var callee = cachedArguments[i].callee;
    if (typeof callee != "function")
        print("ERROR: callee is " + callee); 
}
