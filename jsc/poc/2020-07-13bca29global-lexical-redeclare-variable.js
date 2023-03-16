let globalLet = "let";
function globalFunction() { }
class globalClass { }
const globalConst = 20;
var globalVar = 21;
this.globalProperty = 22;

let sentinel = "__s__";

function assert(b) {
    if (!b)
        throw new Error("bad assertion");
}

function assertExpectations() {
    assert(sentinel === "__s__");
}


let errorCount = 0;
function assertProperError(e) {
    if (e instanceof SyntaxError && e.message.indexOf("Can't create duplicate variable") !== -1) {
        errorCount++;
    } else {
        assert(false);
    }

}

assertExpectations();

try {
    ;
} catch(e) {
    assertProperError(e);
}
assertExpectations();

try {
    ;
} catch(e) {
    assertProperError(e);
}
assertExpectations();

try {
    ;
} catch(e) {
    assertProperError(e);
}
assertExpectations();

try {
    ;
} catch(e) {
    assertProperError(e);
}
assertExpectations();

try {
    ;
} catch(e) {
    assertProperError(e);
}
assertExpectations();




try {
    sentinel = "bad";
    assert(Object.getOwnPropertyDescriptor(this, "globalProperty").configurable);
    ;
} catch(e) {
    assert(false);
}
assertExpectations();

try {
    sentinel = "bad";
    assert(Object.getOwnPropertyDescriptor(this, "Array").configurable);
    ;
} catch(e) {
    assert(false);
}
assertExpectations();

try {
    sentinel = "bad";
    Object.defineProperty(this, 'foo', {value: 5, configurable: true, writable: true});
    ;
} catch(e) {
    assert(false);
}
assertExpectations();

try {
    Object.defineProperty(this, 'bar', {value: 5, configurable: false, writable: true});
    ;
} catch(e) {
    assertProperError(e);
}
assertExpectations();

assert(errorCount === 6);

try {
    Object.defineProperty(this, 'zoo', {value: undefined, configurable: false, writable: true});
    ;
} catch(e) {
    assertProperError(e);
}
assertExpectations();

assert(errorCount === 7);
