




const x = "let x";

Object.seal(this);
try {
Object.defineProperty(this, 'x', {value:'20', configurable: true });
}
catch(e) {
    WScript.Echo("exception: " + e);
}
WScript.Echo(x);
WScript.Echo(this.x);
WScript.Echo(Object.isSealed(this));

