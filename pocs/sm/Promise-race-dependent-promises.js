var g = newGlobal({newCompartment: true});
var dbg = new Debugger();
var gw = dbg.addDebuggee(g);

function test(withFastPath) {
    g.eval(`
        function newPromiseCapability() {
            var resolve, reject, promise = new Promise(function(r1, r2) {
                resolve = r1;
                reject = r2;
            });
            return {promise, resolve, reject};
        }

        var {promise: alwaysPending} = newPromiseCapability();

        if (!${withFastPath}) {
            
            
            
            alwaysPending.then = function() {};
        }

        var result = Promise.race([alwaysPending]);
    `);

    var alwaysPending = gw.makeDebuggeeValue(g.alwaysPending);
    var result = gw.makeDebuggeeValue(g.result);

    print(alwaysPending.promiseDependentPromises.length, 1);
    print(alwaysPending.promiseDependentPromises[0], result);

    print(result.promiseDependentPromises.length, 0);
}


test(true);


test(false);
