




var log;
if (typeof telemetryLog === 'undefined') {
    log = function (msg, shouldWrite) {
        if (shouldWrite) {
            WScript.Echo(msg);
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



class C {
    constructor(v2) {
        this.v2 = v2;
    }

    * testGenerator() {
        this.v2++;
        yield { v2: this.v2};
        this.v2++;
        yield { v2: this.v2 };
        this.v2++;
        yield { v2: this.v2 };
        this.v2++;
        yield { v2: this.v2 };
    }
}

var c = new C(10);

var gen = c.testGenerator();

function yieldOne() {
    var v1 = gen.next();
    var val = JSON.stringify(v1.value, undefined, '');
    log(`gen.next() = {value: ${val}, done: ${v1.done}}`, true);
}

WScript.SetTimeout(() => {
    yieldOne();
}, 50);

WScript.SetTimeout(() => {
    yieldOne();
}, 200);

WScript.SetTimeout(() => {
    yieldOne();
    writeTTDLog(ttdLogURI);
}, 350);