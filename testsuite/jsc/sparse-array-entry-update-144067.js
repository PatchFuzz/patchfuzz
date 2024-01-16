






var data = {};
var sparseObj = {};

for (var i = 0; i < 5; i++)
    sparseObj[i] = i;

function useMemoryToTriggerGCs() {
    var arr = [];
    var limit = $vm.dfgTrue() ? 10000 : 100;
    for (var i = 0; i < limit; i++)
        arr[i] = { a: "using" + i, b: "up" + i, c: "memory" + i };
    return arr;
}

function foo(x) {
    if (!x)
        return;
    data.textContent = sparseObj.__defineSetter__("16384", foo);
    for (var i = 0; i < 10; i++)
        sparseObj.__defineSetter__("" + (16384 + i), foo);
    useMemoryToTriggerGCs();
    sparseObj[16384] = x - 1;
}

var recursionDepthNeededToTriggerTheFailure = 100;
foo(recursionDepthNeededToTriggerTheFailure);
