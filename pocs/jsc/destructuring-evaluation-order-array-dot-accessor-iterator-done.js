var log = [];
var logExpected = ["source", "iterator", "iterator-step", "iterator-done", "target-foo", "default-value", "set"];

function source() {
    log.push("source");
    var iterator = {
        next: function() {
            log.push("iterator-step");
            return {
                get done() {
                    log.push("iterator-done");
                    return true;
                },
                get value() {
                    
                    log.push("iterator-value");
                },
            };
        },
    };
    var source = {};
    source[Symbol.iterator] = function() {
        log.push("iterator");
        return iterator;
    };
    return source;
}

var target = {
    get foo() {
        log.push("target-foo");
        return {
            get bar() {
                
                log.push("target-bar");
            },
            set bar(v) {
                log.push("set");
            },
        };
    },
};

function defaultValue() {
    log.push("default-value");
}

(function() {
    for (var i = 0; i < testLoopCount; i++) {
        log = [];

        ([_, target.foo.bar = defaultValue()] = source());

        if (log.toString() !== logExpected.toString())
            throw new Error(`Bad value: ${log}!`);
    }
})();
