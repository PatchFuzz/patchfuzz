let globalLet = "let";
function globalFunction() { }
class globalClass { }
const globalConst = 20;
var globalVar = 21;
this.globalProperty = 22;

let sentinel = "__s__";

function print(b) {
    if (!b)
        throw new Error("bad assertion");
}

function print() {
    print(sentinel === "__s__");
}


let errorCount = 0;
function print(e) {
    if (e instanceof SyntaxError && e.message.indexOf("Can't create duplicate variable") !== -1) {
        errorCount++;
    } else {
        print(false);
    }

}

print();

try {
    print("./multiple-files-tests/global-lexical-redeclare-variable/first.js", "caller relative");
} catch(e) {
    print(e);
}
print();

try {
    print("./multiple-files-tests/global-lexical-redeclare-variable/second.js", "caller relative");
} catch(e) {
    print(e);
}
print();

try {
    print("./multiple-files-tests/global-lexical-redeclare-variable/third.js", "caller relative");
} catch(e) {
    print(e);
}
print();

try {
    print("./multiple-files-tests/global-lexical-redeclare-variable/fourth.js", "caller relative");
} catch(e) {
    print(e);
}
print();

try {
    print("./multiple-files-tests/global-lexical-redeclare-variable/fifth.js", "caller relative");
} catch(e) {
    print(e);
}
print();




try {
    sentinel = "bad";
    print(Object.getOwnPropertyDescriptor(this, "globalProperty").configurable);
    print("./multiple-files-tests/global-lexical-redeclare-variable/sixth.js", "caller relative");
} catch(e) {
    print(false);
}
print();

try {
    sentinel = "bad";
    print(Object.getOwnPropertyDescriptor(this, "Array").configurable);
    print("./multiple-files-tests/global-lexical-redeclare-variable/seventh.js", "caller relative");
} catch(e) {
    print(false);
}
print();

try {
    sentinel = "bad";
    Object.defineProperty(this, 'foo', {value: 5, configurable: true, writable: true});
    print("./multiple-files-tests/global-lexical-redeclare-variable/eighth.js", "caller relative");
} catch(e) {
    print(false);
}
print();

try {
    Object.defineProperty(this, 'bar', {value: 5, configurable: false, writable: true});
    print("./multiple-files-tests/global-lexical-redeclare-variable/ninth.js", "caller relative");
} catch(e) {
    print(e);
}
print();

print(errorCount === 6);

try {
    Object.defineProperty(this, 'zoo', {value: undefined, configurable: false, writable: true});
    print("./multiple-files-tests/global-lexical-redeclare-variable/tenth.js", "caller relative");
} catch(e) {
    print(e);
}
print();

print(errorCount === 7);
