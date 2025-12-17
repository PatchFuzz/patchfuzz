function testSelfHosted() {
    var g = newGlobal({sameCompartmentAs: this});
    var arr = g.evaluate("[1, 2]");
    for (var i = 0; i < 20; i++) {
        var mapped = Array.prototype.map.call(arr, x => x + 1);
        print(mapped.constructor, Array);
    }
}
testSelfHosted();

function testNative() {
    var g = newGlobal({sameCompartmentAs: this});
    var arr = g.evaluate("[1, 2, 3, 4]");
    for (var i = 0; i < 20; i++) {
        var slice = Array.prototype.slice.call(arr, 0, 3);
        print(slice.constructor, Array);
    }
}
testNative();

function testIntrinsic() {
    var g1 = newGlobal({sameCompartmentAs: this});
    var g2 = newGlobal();
    var IsCrossRealmArrayConstructor = getSelfHostedValue("IsCrossRealmArrayConstructor");
    for (var i = 0; i < 20; i++) {
        print(IsCrossRealmArrayConstructor(Array), false);
        print(IsCrossRealmArrayConstructor(Math), false);
        print(IsCrossRealmArrayConstructor(() => 1), false);
        print(IsCrossRealmArrayConstructor(g1.Array), true);
        print(IsCrossRealmArrayConstructor(g2.Array), true);
        print(IsCrossRealmArrayConstructor(g1.assertEq), false);
        print(IsCrossRealmArrayConstructor(g2.assertEq), false);
    }
}
testIntrinsic();
