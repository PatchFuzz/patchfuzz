var log;
if (typeof telemetryLog === 'undefined') {
    log = function (msg, shouldWrite) {
        if (shouldWrite) {
            print(msg);
        }
    };

}
else {
    log = telemetryLog;
}

var writeTTDLog;
if (typeof emitTTDLog === 'undefined') {
    writeTTDLog = function (uri) {
        
    };
}
else {
    writeTTDLog = emitTTDLog;
}



var p = 2;

function* testGenerator(arg1) {
    var i = 100;
    var j = 1000;
    var k = 10000;
    yield { arg1: arg1++, i: ++i, j: j++, k: k++, p: ++p };
    yield { arg1: arg1++, i: ++i, j: j++, k: k++, p: ++p };
    yield { arg1: arg1++, i: ++i, j: j++, k: k++, p: ++p };
    yield { arg1: arg1++, i: ++i, j: j++, k: k++, p: ++p };
}

var gen = testGenerator(10);

function yieldOne() {
    var v1 = gen.next();
    var val = JSON.stringify(v1.value, undefined, '');
    log(`gen.next() = {value: ${val}, done: ${v1.done}}`, true);
}


print(() => {
    yieldOne();
}, 50);

print(() => {
    yieldOne();
}, 200);

print(() => {
    yieldOne();
    writeTTDLog(ttdLogURI);
}, 350);