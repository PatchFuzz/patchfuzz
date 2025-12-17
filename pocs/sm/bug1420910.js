Array.prototype.sum = function() {
    return this.reduce(( acc, cur ) => acc + cur, 0);
}


Iters = 20;

function resultArray(fn, obj) {
    res = new Array();
    for (var x = 0; x < Iters; x++) {
        res.push(fn(obj) ? 1 : 0);
    }
    return res;
}


function basic() {};

protoA = { prop1: "1"};
basic.prototype = protoA;

io1 = x => { return x instanceof basic; }

var x = new basic();
beforePrototypeModification = resultArray(io1,x).sum(); 
print(beforePrototypeModification,Iters);

basic.prototype = {}; 
afterPrototypeModification  = resultArray(io1,x).sum(); 
print(afterPrototypeModification,0);


print(resultArray(io1,0).sum(),0);