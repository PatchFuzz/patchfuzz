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



function* testGeneratorInternal(arg1) {
    while (arg1 < 5) {
        yield ++arg1;
    }
}


function* testGenerator(arg1) {
    var int = testGeneratorInternal(arg1);
    for (var curr = int.next(); curr && !curr.done; curr = int.next()) {
        yield curr.value;
    }
}

var gen = testGenerator(1);

function yieldOne() {
    var v1 = gen.next();
    var val = JSON.stringify(v1.value, undefined, '');
    log(`gen.next() = {value: ${val}, done: ${v1.done}}`, true);
}

function consumeRemainder() {
    var v1;
    do {
        v1 = gen.next();
        var val = 'undefined';
        if (v1.value !== undefined) {
            val = JSON.stringify(v1.value, undefined, '');
        }
        log(`gen.next() = {value: ${val}, done: ${v1.done}}`, true);
    } while (v1 && !v1.done);
}

print(() => {
    yieldOne();
}, 50);

print(() => {
    yieldOne();
}, 100);

print(() => {
    consumeRemainder();
    writeTTDLog(ttdLogURI);
}, 200);