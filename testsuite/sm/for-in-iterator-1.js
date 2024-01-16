gczeal(0);

var values = {
    input1: null,
    input2: undefined,
    input3: {},
    input4: [],
    input5: ""
};

var original = function (x) {
    var res = { start: inIon(), end: false };
    for (var i in x.input) {
        throw "Iterator is not empty";
    }
    res.end = inIon();
    return res;
};

for (var i = 1; i < 6; i++) {
    
    var res = false;
    var test = eval(`(${original})`.replace(".input", ".input" + i));

    
    
    while (!res.start || !res.end)
        res = test(values);
}
