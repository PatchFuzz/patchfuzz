var attrs = ["configurable", "enumerable", "writable", "value", "get", "set"];

function test(target, id, existingDesc, expectedDesc) {
    var log = "";
    var p = new Proxy(target, {
        getOwnPropertyDescriptor(t, idarg) {
            print(idarg, id);
            log += "g";
            return existingDesc;
        },
        defineProperty(t, idarg, desc) {
            print(idarg, id);
            for (var attr of attrs) {
                var args = JSON.stringify([target, id, existingDesc]).slice(1, -1);
                print(attr in desc, attr in expectedDesc,
                         `test(${args}), checking existence of desc.${attr}`);
                print(desc[attr], expectedDesc[attr],
                         `test(${args}), checking value of desc.${attr}`);
            }
            log += "d";
            return true;
        }
    });
    p[id] = "pizza";
    print(log, "gd");
}

var fullDesc = {
    configurable: true,
    enumerable: true,
    writable: true,
    value: "pizza"
};
var valueOnlyDesc = {
    value: "pizza"
};
var sealedDesc = {
    configurable: false,
    enumerable: true,
    writable: true,
    value: "pizza"
};

test({}, "x", undefined, fullDesc);
test({}, "x", fullDesc, valueOnlyDesc);
test({x: 1}, "x", undefined, fullDesc);
test({x: 1}, "x", fullDesc, valueOnlyDesc);
test(Object.seal({x: 1}), "x", sealedDesc, valueOnlyDesc);
test(Object.create({x: 1}), "x", undefined, fullDesc);
test([0, 1, 2], "2", undefined, fullDesc);
test([0, 1, 2], "2", fullDesc, valueOnlyDesc);
test([0, 1, 2], "3", undefined, fullDesc);
test([0, 1, 2], "3", fullDesc, valueOnlyDesc);
