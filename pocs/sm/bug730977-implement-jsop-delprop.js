function makeThing(i)
{
    var thing = {};
    thing.foo = i;
    thing.bar = "bar_" + i;
    Object.defineProperty(thing, 'baz', {'configurable':false, 'value':[i]});
    return thing;
}
function makeArray(count)
{
    var arr = new Array(count);
    for(var i = 0; i < count; i++) {
        arr[i] = makeThing(i);
    }
    return arr;
}
function delBar(obj)
{
    print(Object.getOwnPropertyDescriptor(obj, 'bar') === undefined, false);
    print(delete obj.bar, true);
    print(Object.getOwnPropertyDescriptor(obj, 'bar') === undefined, true);
}
function delBaz(obj)
{
    var s = delete obj.baz;
    print(Object.getOwnPropertyDescriptor(obj, 'baz') === undefined, false);
    print(delete obj.baz, false);
    print(Object.getOwnPropertyDescriptor(obj, 'baz') === undefined, false);
}
function delNonexistentThingy(obj)
{
    print(Object.getOwnPropertyDescriptor(obj, 'thingy') === undefined, true);
    print(delete obj.thingy, true);
    print(Object.getOwnPropertyDescriptor(obj, 'thingy') === undefined, true);
}
function testDelProp()
{
    var arr = makeArray(10000);
    for(var i = 0; i < 10000; i++) {
        var obj = arr[i];
        print(Object.getOwnPropertyDescriptor(obj, 'foo') === undefined, false);
        print(delete obj.foo, true);
        print(Object.getOwnPropertyDescriptor(obj, 'foo') === undefined, true);
        delBar(obj);
        delBaz(obj);
        delNonexistentThingy(obj);
    }
}

testDelProp();
