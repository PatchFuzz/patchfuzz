


var arr = [];
let numberOfIterations = 1000;

function captureScopedArguments(i) {
    try {
        eval("arr[" + i + "] = arguments");
    } catch(e) {
    }
}

function addPointersToEdenGenObjects(i) {
    Array.prototype.push.call(arr[i], [,,]);

    try {
        Array.prototype.reverse.call(arr[i])
    } catch (e) {
    }
}

for (var i = 0; i < numberOfIterations; i++) {
    captureScopedArguments(i);
}

gc(); 

for (var i = 0; i < numberOfIterations; i++) {
    addPointersToEdenGenObjects(i);
}

edenGC(); 

gc(); 
