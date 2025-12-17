function test() {
    var funs = [function() {}, new Proxy(function() {}, {}), wrapWithProto(function() {}, null), new Proxy(createIsHTMLDDA(), {})];
    var objects = [{}, new Proxy({}, {}), wrapWithProto({}, null)];
    var undefs = [createIsHTMLDDA(), wrapWithProto(createIsHTMLDDA(), null)];

    for (var fun of funs) {
        print(typeof fun, "function")
    }

    for (var obj of objects) {
        print(typeof obj, "object");
    }

    for (var undef of undefs) {
        print(typeof undef, "undefined");
    }
}

test();
