function print(b) {
    if (!b)
        throw new Error;
}
noInline(print);

function getProperties(obj) {
    let properties = [];
    for (let name of Object.getOwnPropertyNames(obj)) {
        properties.push(name);
    }
    return properties;
}

function theFunc(obj, index) {
    let args = [42.195, 20.2];
    let functions = getProperties(obj);
    let func = functions[index % functions.length];
    obj[func](...args);
}

let obj = {
    valueOf: function (x, y) {
        print(x === 42.195);
        print(y === 20.2);
        try {
        } catch (e) {}
    }
};

for (let i = 0; i < testLoopCount; ++i) {
    for (let _i = 0; _i < 100; _i++) {
    }
    theFunc(obj, 897989);
}
