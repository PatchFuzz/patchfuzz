if (typeof Error.isError !== "function") {
    quit();
}


print(Error.isError(null), false);
print(Error.isError(undefined), false);
print(Error.isError(123), false);
print(Error.isError("string"), false);


print(Error.isError({}), false);
print(Error.isError(new Object()), false);


print(Error.isError(new Error()), true);
print(Error.isError(new TypeError()), true);
print(Error.isError(new RangeError()), true);


const g = newGlobal({ newCompartment: true });
const e = g.eval(`new Error()`);
print(Error.isError(e), true);

nukeCCW(e);


let caught = false;
try {
    Error.isError(e);
} catch (ex) {
    caught = true;
    print(ex.message, "can't access dead object");
}
print(caught, true);
