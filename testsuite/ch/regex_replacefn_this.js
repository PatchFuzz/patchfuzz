




var result;
'x'.replace(/x/, function() { result = this; });

WScript.Echo(result === this);
