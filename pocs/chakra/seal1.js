const x = "const x";

Object.preventExtensions(this);
Object.getOwnPropertyNames(this).concat(Object.getOwnPropertySymbols(this)).forEach(function (p) {
    Object.defineProperty(this, p, { configurable: false });
});

if (Object.isSealed(this)) {
   print("PASS");
}


