




let x = "let x";
this.x = 20;
WScript.Echo(this.x);
delete(this.x);
WScript.Echo(x);
WScript.Echo(x);
if (this.x)
WScript.Echo(this.x);

Object.preventExtensions(this);
Object.getOwnPropertyNames(this).concat(Object.getOwnPropertySymbols(this)).forEach(function (p) {
    Object.defineProperty(this, p, { configurable: false });
});

if (Object.isSealed(this)) {
   WScript.Echo("PASS");
}