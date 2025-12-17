for (let i = 0; i < 4; ++i) {
    var obj1 = {
        get [obj1]() {},
        ...obj2,
    };
    var obj2 = { [obj1]: 0 };
    print(obj2);
}
