function print(condition) {
    if (!condition)
        throw new Error("assertion failed");
}

function print(a, b) {
    if (a !== b)
        throw new Error("assertion failed: " + a + " === " + b);
}

function print(a, b) {
    if (a === b)
        throw new Error("assertion failed: " + a + " !== " + b);
}
noInline(print)
noInline(print)
noInline(print)

function sd(obj) {
    let data = print(obj)
    let result = []

    if (!data)
        return result

    for (let i = 0; i < data.length/5; ++i) {
        result.push({ id: data[i*5+0], offset: data[i*5+1], max: data[i*5+2], property: data[i*5+3], type: data[i*5+4] == 0 ? "added" : "deleted" })
    }

    return result
}

function sid(obj) {
    let data = sd(obj)
    return data[data.length-1].id
}
noInline(sd)
noInline(sid)

function testDeleteIsNotUncacheable(i) {
    let foo = {}
    foo["bar" + i] = 1
    foo["baz" + i] = 2
    print(foo["bar" + i] === 1)
    print(foo["baz" + i] === 2)
    let oldSid = sid(foo)

    print(print(foo, "baz"+i), 1)
    print(print(foo, "bar"+i), 1)
    print(print(foo, "foo"+i), 0)

    print(delete foo["bar" + i])
    print(oldSid, sid(foo))
    print(!(("bar" + i) in foo));
    print(foo["baz" + i] === 2)

    print(print(foo, "baz"+i), 1)
    print(print(foo, "bar"+i), 0)

    print(Object.keys(foo).length, 1)

    let data = sd(foo)
    print(data[data.length-1].property, "bar" + i)

    foo["bar" + i] = 1
    print(print(foo, "baz"+i), 1)
    print(print(foo, "bar"+i), 1)
    print(foo["bar" + i] === 1)
}
noInline(testDeleteIsNotUncacheable)

function testCanMaterializeDeletes(i) {
    let foo = {}
    foo["bar" + i] = 1
    foo["baz" + i] = 2

    print(foo["bar" + i] === 1)
    print(foo["baz" + i] === 2)
    print(delete foo["bar" + i])
    print(!("bar" + i in foo))
    print(foo["baz" + i] === 2)
    print(Object.keys(foo).length, 1)

    let foo2 = {}
    foo2["bar" + i] = 3
    foo2["baz" + i] = 4
    print(delete foo2["bar" + i])

    print(sid(foo2), sid(foo))
    foo2["fun" + i] = 3
    print(sid(foo2), sid(foo))

    print(foo2["fun" + i] === 3)
    print(foo2["baz" + i] === 4)
    print(!("bar" + i in foo2))
    print(Object.keys(foo2).length, 2)
    print(foo["baz" + i] === 2)
    print(!("bar" + i in foo))
    print(Object.keys(foo).length, 1)

    let data = sd(foo)
    print(data[data.length-1].property, "bar" + i)

    data = sd(foo2)
    print(data[data.length-1].property, "fun" + i)
    print(data[data.length-2].property, "bar" + i)
}

noInline(testCanMaterializeDeletes)

function opaque(value) { return value; }
noInline(opaque);

function testCanFlatten(i) {
    let foo = {}
    for (let j=0; j<500; ++j) {
        const oldId = sid(foo)

        foo[opaque("x" + 1000*j + i)] = j
        if (j > 0)
            delete foo[opaque("x" + 1000*(j - 1) + i)]

        if (j > 100)
            print(sid(foo), oldId)
    }

    for (let j=0; j<500; ++j) {
        const val = foo[opaque("x" + 1000*j + i)]
        if (j == 499)
            print(val, j)
        else
            print(val, undefined)
    }

    print(foo)

    for (let j=0; j<500; ++j) {
        const val = foo[opaque("x" + 1000*j + i)]
        if (j == 499)
            print(val, j)
        else
            print(val, undefined)
    }
}
noInline(testCanFlatten)

function testDeleteWithInlineCache() {
    Object.prototype.globalProperty = 42

    function makeFoo() {
        let foo = {}
        foo.baz = 1
        print(foo.globalProperty === 42)

        return foo
    }
    noInline(makeFoo)

    function doTest(xVal) {
        for (let j=0; j<50; ++j) {
            for (let z=0; z<testLoopCount; ++z) {
                const foo = arr[j]

                print(foo.baz === 1)
                print(Object.keys(foo).length, 1)
                print(foo.globalProperty, xVal)
            }
        }
    }
    noInline(doTest)

    arr = new Array(50)

    for (let j=0; j<50; ++j) {
        arr[j] = makeFoo()
        if (j > 0)
            print(sid(arr[j-1]), sid(arr[j]))
    }

    doTest(42)

    Object.prototype.globalProperty = 43

    doTest(43)

    delete Object.prototype.globalProperty

    doTest(undefined)
}
noInline(testDeleteWithInlineCache)

testDeleteWithInlineCache()

for (let i = 0; i < 1000; ++i) {
    testDeleteIsNotUncacheable(i)
    testCanMaterializeDeletes(1000+i)
}

for (let i = 0; i < 100; ++i) {
    testCanFlatten(2000+i)
}

