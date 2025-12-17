var test = function test(obj) {
    print(Object.keys(obj).length, 0);

    var i = 0, v;
    for (v in obj)
        i++;
    print(i, 0);

    obj.ownProp = 1;
    print(Object.keys(obj).join(), "ownProp");

    for (v in obj)
        i++;
    print(i, 1);
    print(v, "ownProp");

    delete obj.ownProp;
};

test(Map.prototype);
test(new Map);
test(Set.prototype);
test(new Set);
