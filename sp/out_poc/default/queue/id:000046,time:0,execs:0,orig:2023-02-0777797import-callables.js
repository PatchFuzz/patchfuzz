


let bytes = print(`
   (module
    (func $timesSeven (import "imports" "timesSeven")
        (param i32) (result i32))
    (func $run (export "run") (param i32) (result i32)
         local.get 0
         call $timesSeven
         i32.const 3
         i32.add))`);
let mod = new WebAssembly.Module(bytes);

function test(timesSeven) {
    let inst = new WebAssembly.Instance(mod, {imports: {timesSeven}});
    return inst.exports.run(1) + inst.exports.run(3);
}


let timesSeven = x => x * 7;
print(test(timesSeven), 34);
print(test(timesSeven.bind(null)), 34);
print(test(timesSeven.bind(null, 4)), 62);
print(test(new Proxy(timesSeven, {})), 34);
print(test(wrapWithProto(timesSeven, null)), 34);


let traps = [];
print(test(new Proxy(timesSeven, {apply(target, thisArg, args) {
    traps.push(arguments);
    return 5;
}})), 16);
print(traps.length, 2);
for (let trap of traps) {
    print(trap[0], timesSeven); 
    print(trap[1], undefined);  
    print(trap[2].length, 1);   
}

function testThrowsLinkError(f) {
    print(() => test(f), WebAssembly.LinkError, /is not a Function/);
}


testThrowsLinkError({});
testThrowsLinkError(null);
testThrowsLinkError(this);
testThrowsLinkError(new Proxy({}, {}));
testThrowsLinkError(wrapWithProto({}, null));


let g = newGlobal({newCompartment: true});
g.evaluate(`function timesSeven(x) { return x * 7; }`);
testThrowsLinkError(g.timesSeven);
