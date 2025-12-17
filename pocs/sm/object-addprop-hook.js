function test() {
    var sym = Symbol();
    for (var i = 0; i < 100; i++) {
        var obj = newObjectWithAddPropertyHook();
        print(obj._propertiesAdded, 0);
        obj.x = 1;
        obj.y = 2;
        obj.z = 3;
        obj[sym] = 4;
        obj[0] = 1;
        obj[1234567] = 1;
        print(obj._propertiesAdded, 6);
        print(obj.x, 1);
        print(obj[sym], 4);
        print(obj[0], 1);
    }
}
test();
