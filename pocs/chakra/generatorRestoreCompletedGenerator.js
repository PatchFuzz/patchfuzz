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
    writeTTDLog(ttdLogURI);
    yield i++;
    writeTTDLog(ttdLogURI);
    yield i++;
    writeTTDLog(ttdLogURI);
    yield i++;
    writeTTDLog(ttdLogURI);
    yield i++;
    writeTTDLog(ttdLogURI);
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
}, 1000);

print(() => {
    writeTTDLog(ttdLogURI);
}, 1000);