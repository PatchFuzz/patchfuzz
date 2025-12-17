function print(condition) {
    if (!condition)
        throw new Error("assertion failed")
}
noInline(print)

let iterationCount = 10000;

function print(f) {
    try {
        f()
    } catch {
        return
    }
    throw new Error("assertion failed")
}
noInline(print)

function blackbox(x) {
    return x
}
noInline(blackbox)

function testSingleStructure() {
    function doAlloc1() {
        let obj = {}
        obj.x = 5
        obj.y = 7
        obj.y = blackbox(obj.y)
        print(delete obj.x)
        return obj.y
    }
    noInline(doAlloc1)

    for (let i = 0; i < iterationCount; ++i) {
        doAlloc1()
    }
}
noInline(testSingleStructure)

function testInlineSingleStructure() {
    function doDelete2(o) {
        print(delete o.x)
    }

    function doAlloc2() {
        let obj = {}
        obj.x = 5
        obj.y = 7
        obj.y = blackbox(obj.y)
        doDelete2(obj)
        return obj.y
    }
    noInline(doAlloc2)

    for (let i = 0; i < 50; ++i) {
        doDelete2({ i, f: 4 })
        doDelete2({ i, e: 4 })
        doDelete2({ i, d: 4 })
        doDelete2({ i, c: 4 })
        doDelete2({ i, b: 4 })
        doDelete2({ i, a: 4 })
        doAlloc2()
    }

    for (let i = 0; i < iterationCount; ++i) {
        doAlloc2()
    }
}
noInline(testInlineSingleStructure)

function testExit() {
    function doDelete3(obj) {
        print(delete obj.y)
    }
    noInline(doDelete3)

    for (let i = 0; i < iterationCount; ++i) {
        doDelete3({ i, a: 4 })
    }

    for (let i = 0; i < 50; ++i) {
        doDelete3({ i, f: 4 })
        doDelete3({ i, e: 4 })
        doDelete3({ i, d: 4 })
        doDelete3({ i, c: 4 })
        doDelete3({ i, b: 4 })
        doDelete3({ i, a: 4 })
    }

    for (let i = 0; i < iterationCount; ++i) {
        doDelete3({ i, a: 4 })
    }
}
noInline(testExit)

function testSingleStructureMiss() {
    function doAlloc4() {
        let obj = {}
        obj.x = 5
        obj.y = 7
        obj.y = blackbox(obj.y)
        print(delete obj.z)
        return obj.y
    }
    noInline(doAlloc4)

    for (let i = 0; i < iterationCount; ++i) {
        doAlloc4()
    }
}
noInline(testSingleStructureMiss)

function testSingleStructureMissStrict() {
    "use strict"

    function doAlloc5() {
        let obj = {}
        obj.y = 5
        Object.defineProperty(obj, "x", {
            configurable: false,
            value: 41
        })
        obj.y = blackbox(obj.y)
        print(() => delete obj.x)
        return obj.y
    }
    noInline(doAlloc5)

    for (let i = 0; i < iterationCount; ++i) {
        doAlloc5()
    }
}
noInline(testSingleStructureMissStrict)

function testSingleStructureMissNonConfigurable() {
    function doAlloc6() {
        let obj = {}
        obj.y = 5
        Object.defineProperty(obj, "x", {
            configurable: false,
            value: 41
        })
        obj.y = blackbox(obj.y)
        print(!(delete obj.x))
        return obj.y
    }
    noInline(doAlloc6)

    for (let i = 0; i < iterationCount; ++i) {
        doAlloc6()
    }
}
noInline(testSingleStructureMissNonConfigurable)

function testSingleStructureEmpty() {
    function doAlloc7() {
        let obj = { a: 1, b: 2}
        obj[1] = 5
        delete obj[1]
        blackbox(() => obj.x = 5)()
        print(Object.keys(obj).length == 3)
        print(delete obj.a)
        print(delete obj.b)
        print(delete obj.x)
        print(Object.keys(obj).length == 0)
        obj.x = 7
        return obj
    }
    noInline(doAlloc7)

    for (let i = 0; i < iterationCount; ++i) {
        doAlloc7()
    }
}
noInline(testSingleStructureEmpty)

function testPolymorphic() {
    function doDelete8(obj) {
        print(delete obj.y)
        return obj
    }
    noInline(doDelete8)

    for (let i = 0; i < 5; ++i) {
        doDelete8({ i, a: 4 })
    }

    for (let i = 0; i < iterationCount; ++i) {
        doDelete8({ i, f: 4 })
        print(doDelete8({ i, e: 4, y: 10 }).y === undefined)
        doDelete8({ i, d: 4 })
        doDelete8({ i, c: 4 })
        doDelete8({ i, b: 4 })
        print(doDelete8({ i, a: 4, y: 10 }).y === undefined)
    }

    for (let i = 0; i < iterationCount; ++i) {
        doDelete8({ i, a: 4 })
    }
}
noInline(testPolymorphic)

function testPolyvariant() {
    function doDelete9(obj) {
        print(delete obj.y)
        return obj
    }

    function polyvariant(obj) {
        return doDelete9(obj)
    }
    noInline(polyvariant)

    for (let i = 0; i < 5; ++i) {
        polyvariant({ i, a: 4 })
    }

    for (let i = 0; i < iterationCount; ++i) {
        doDelete9({ i, f: 4 })
        print(doDelete9({ i, e: 4, y: 10 }).y === undefined)
        doDelete9({ i, d: 4 })
        doDelete9({ i, c: 4 })
        doDelete9({ i, b: 4 })
        print(doDelete9({ i, a: 4, y: 10 }).y === undefined)
    }

    for (let i = 0; i < iterationCount; ++i) {
        polyvariant({ i, a: 4 })
    }
}
noInline(testPolyvariant)

function testConstantFolding() {
    function doDelete10(obj) {
        if (print()) {
            obj = { i: 0, a: 5, y: 20 }
        }
        print(delete obj.y)
        print((delete obj.z) + 5 == 6)
        return obj
    }
    noInline(doDelete10)

    for (let i = 0; i < iterationCount; ++i) {
        print(doDelete10({ i, a: 4, y: 10 }).y === undefined)
        doDelete10({ i, f: 4 })
        print(doDelete10({ i, e: 4, y: 10 }).y === undefined)
        doDelete10({ i, d: 4 })
        doDelete10({ i, c: 4 })
        doDelete10({ i, b: 4 })
    }
}
noInline(testConstantFolding)

function testObjectSinking() {
    function doAlloc11(i) {
        let obj = {}
        obj.x = 1
        obj.y = 2
        if (i == 0)
            obj.a = 3
        else if (i == 1)
            obj.b = 3
        else if (i == 3)
            obj.c = 3
        delete obj.x
        print((delete obj.x) + 5 == 6)
        return obj.y

    }
    noInline(doAlloc11)

    for (let i = 0; i < iterationCount; ++i) {
        print(doAlloc11(i % 3) == 2)
    }
    print(doAlloc11(4) == 2)
}
noInline(testObjectSinking)

function testProxy() {
    function doAlloc12() {
        let obj = {}
        obj.x = 1
        obj.count = 0

        const handler = {
          deleteProperty(target, prop) {
            print(prop == "z")
            delete target.z
            ++obj.count
          }
        }

        return new Proxy(obj, handler)

    }
    noInline(doAlloc12)

    function doDelete12(obj) {
        delete obj.z
    }
    noInline(doDelete12)

    let foo = doAlloc12()
    for (let i = 0; i < iterationCount; ++i) {
        doDelete12(foo)
    }
    print(foo.count = iterationCount)
}
noInline(testProxy)

function testTypedArray() {
    function doDelete12(obj) {
        obj.constructor = null
        print(delete obj.constructor)
    }
    noInline(doDelete12)

    for (let i = 0; i < iterationCount; ++i) {
        doDelete12(new Uint8Array())
    }

    let foo = new Uint8Array(12);
    transferArrayBuffer(foo.buffer)
    doDelete12(foo)
    print(delete foo[0]);
}
noInline(testTypedArray)

function testMissMixed() {
    function doDelete13(obj) {
        return delete obj.x
    }
    noInline(doDelete13)

    for (let i = 0; i < iterationCount; ++i) {
        print(doDelete13({ y: 4 }))
        let foo = {}
        Object.defineProperty(foo, "x", {
            configurable: false,
            value: 41
        })
        print(!doDelete13(foo))
    }
}
noInline(testMissMixed)

function testMissNonMixed() {
    function doDelete14(obj) {
        return delete obj.x
    }
    noInline(doDelete14)

    for (let i = 0; i < iterationCount; ++i) {
        let foo = {}
        Object.defineProperty(foo, "x", {
            configurable: false,
            value: 41
        })
        print(!doDelete14(foo))

        foo = { y: 4 }
        Object.defineProperty(foo, "x", {
            configurable: false,
            value: 40
        })
        print(!doDelete14(foo))
    }
}
noInline(testMissNonMixed)

function testByVal() {
    function doDelete15(obj) {
        return delete obj["x"]
    }
    noInline(doDelete15)

    function test() {
        print(doDelete15({ y: 4 }))
        let foo = {}
        Object.defineProperty(foo, "x", {
            configurable: false,
            value: 41
        })
        print(!doDelete15(foo))

        foo = { x: 4 }
        print(doDelete15(foo))
        print(foo.x == undefined)
    }

    for (let i = 0; i < 10; ++i) {
        test();
        gc()
    }
    for (let i = 0; i < iterationCount; ++i)
        test();
    for (let i = 0; i < 5; ++i) {
        test();
        gc();
    }
}
noInline(testByVal)

testByVal()
testMissMixed()
testMissNonMixed()
testTypedArray()
testProxy()
testSingleStructure()
testInlineSingleStructure()
testExit()
testSingleStructureMiss()
testSingleStructureMissStrict()
testSingleStructureMissNonConfigurable()
testSingleStructureEmpty()
testPolymorphic()
testPolyvariant()
testConstantFolding()
testObjectSinking()
