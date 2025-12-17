;

function test(obj, name) {
    var iter = obj[Symbol.iterator]();
    print(typeof iter, "object");
    print(iter.toString(), "[object " + obj.constructor.name + " Iterator]");
}

test([]);
test(new Map);
test(new Set);
