


let bytes = wasmTextToBinary(`
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
assertEq(test(timesSeven), 34);
assertEq(test(timesSeven.bind(null)), 34);
assertEq(test(timesSeven.bind(null, 4)), 62);
assertEq(test(new Proxy(timesSeven, {})), 34);
assertEq(test(wrapWithProto(timesSeven, null)), 34);


let traps = [];
assertEq(test(new Proxy(timesSeven, {apply(target, thisArg, args) {
    traps.push(arguments);
    return 5;
}})), 16);
assertEq(traps.length, 2);
for (let trap of traps) {
    assertEq(trap[0], timesSeven); 
    assertEq(trap[1], undefined);  
    assertEq(trap[2].length, 1);   
}

function testThrowsLinkError(f) {
    assertErrorMessage(() => test(f), WebAssembly.LinkError, /is not a Function/);
}


testThrowsLinkError({});
testThrowsLinkError(null);
testThrowsLinkError(this);
testThrowsLinkError(new Proxy({}, {}));
testThrowsLinkError(wrapWithProto({}, null));


let g = newGlobal({newCompartment: true});
g.evaluate(`function timesSeven(x) { return x * 7; }`);
testThrowsLinkError(g.timesSeven);
