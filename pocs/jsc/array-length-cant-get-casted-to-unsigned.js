function print(b) {
    if (!b)
        throw new Error;
}

const boundary = 2**32; 
const maxSafeInteger = 2**53 - 1;
function testArrayPop() {
    let obj = {
        0: 42,
        length: boundary 
    };
    Array.prototype.pop.call(obj);
    print(obj[0] === 42);
    print(obj.length === boundary - 1);
}
testArrayPop();

function testArrayPush() {
    let obj = {
        0: 42,
        length: boundary
    };
    Array.prototype.push.call(obj, 10);
    print(obj[0] === 42);
    print(obj.length === boundary + 1);
}
testArrayPush();


function testArrayReverse() {
    let obj = {
        0: 42,
        [boundary - 1]: 0,
        length: boundary
    };
    Array.prototype.reverse.call(obj);
    print(obj[0] === 0);
    print(obj[boundary - 1] === 42);
}



function testArrayShift() {
    let obj = {
        0: 42,
        length: boundary
    };
    let elem = Array.prototype.shift.call(obj);
    print(elem === 42);
    print(obj.length === boundary - 1);
    print(obj[0] === undefined);
}


function testArraySlice() {
    let obj = {
        0: 42,
        1: 43,
        length: boundary
    };
    let arr = Array.prototype.slice.call(obj, 0, 2);
    print(arr[0] === 42);
    print(arr[1] === 43);
    print(arr.length === 2);
}
testArraySlice();

function testArraySplice() {
    let obj = {
        0: 42,
        1: 43,
        length: boundary
    };
    Array.prototype.splice.call(obj, boundary-1, 0, 1, 2, 3);
    print(obj.length === boundary + 3);
    print(obj[boundary-1] === 1);
    print(obj[boundary] === 2);
    print(obj[boundary+1] === 3);
}
testArraySplice();


function testArrayUnshift() {
    let obj = {
        1: 42,
        length: boundary
    };
    Array.prototype.unshift.call(obj, 43);
    print(obj[0] === 43);
    print(obj[2] === 42);
    print(obj.length === boundary + 1);
}


function testArrayIndexOf() {
    let obj = {
        30: 42,
        length: boundary
    };
    let r = Array.prototype.indexOf.call(obj, 42);
    print(r === 30);
}
testArrayIndexOf();

function testArrayLastIndexOf() {
    let obj = {
        [boundary - 30]: 42,
        length: boundary
    };
    let r = Array.prototype.lastIndexOf.call(obj, 42);
    print(r === boundary - 30);
}
testArrayLastIndexOf();

function shouldThrowTypeError(f) {
    let ok = false;
    try {
        f();
    } catch(e) {
        ok = e instanceof TypeError && e.message.indexOf("larger than (2 ** 53) - 1") >= 0;
    }
    print(ok);
}

shouldThrowTypeError(function() {
    let obj = {
        0: 42,
        length: maxSafeInteger
    };
    Array.prototype.push.call(obj, 10);
});

shouldThrowTypeError(function() {
    let obj = {
        0: 42,
        length: maxSafeInteger - 1
    };
    Array.prototype.push.call(obj, 10, 20);
});
shouldThrowTypeError(function() {
    let obj = {
        0: 42,
        length: maxSafeInteger
    };
    Array.prototype.unshift.call(obj, 10);
});
shouldThrowTypeError(function() {
    let obj = {
        0: 42,
        length: maxSafeInteger - 1
    };
    Array.prototype.unshift.call(obj, 10, 20);
});
shouldThrowTypeError(function() {
    let obj = {
        0: 42,
        length: maxSafeInteger
    };
    Array.prototype.splice.call(obj, obj.length - 10, 0, 10);
});
shouldThrowTypeError(function() {
    let obj = {
        0: 42,
        length: maxSafeInteger - 1
    };
    Array.prototype.splice.call(obj, obj.length - 10, 0, 10, 20);
});
shouldThrowTypeError(function() {
    let obj = {
        0: 42,
        length: maxSafeInteger - 1
    };
    Array.prototype.splice.call(obj, obj.length - 10, 1, 10, 20, 30);
});
shouldThrowTypeError(function() {
    let obj = {
        0: 42,
        length: maxSafeInteger
    };
    Array.prototype.splice.call(obj, obj.length - 10, 1, 10, 20);
});

function testJSONStringify() {
    let arr = [1,2,3];
    let p = new Proxy(arr, {
        get(target, prop, receiver) {
            if (prop === "length") {
                return boundary;
            }
            return Reflect.get(target, prop, receiver);
        }
    });
    let ok = false;
    try {
        JSON.stringify(p);
    } catch(e) {
        ok = e.message.indexOf("Out of memory") >= 0;
    }
    print(ok);
}
testJSONStringify();
