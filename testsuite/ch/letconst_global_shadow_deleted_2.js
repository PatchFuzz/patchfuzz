




let x = 'let x';

WScript.Echo(x);
WScript.Echo(this.x);

this.x = 'global x';

WScript.Echo(x);
WScript.Echo(this.x);

const y = 'const y';

WScript.Echo(y);
WScript.Echo(this.y);

Object.defineProperty(this, 'y', { configurable: true, get: function () { return 'getter'; } });

WScript.Echo(y);
WScript.Echo(this.y);
