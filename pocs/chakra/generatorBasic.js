var log;
if ( typeof telemetryLog === 'undefined' ) {
    log =  function(msg, shouldWrite) {
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



function* testGenerator() {
    var i = 0;
    yield i++;
    yield i++;
    yield i++;
    yield i++;
}

var gen = testGenerator();

function yieldOne() {
    var v1 = gen.next();
    log(`gen.next() = {value: ${v1.value}, done: ${v1.done}}`, true);
}


print(() => {
    yieldOne();
}, 20);

print(() => {
    yieldOne();
}, 40);

print(() => {
    yieldOne();
}, 60);

print(() => {
    yieldOne();
    writeTTDLog(ttdLogURI);
}, 1000);