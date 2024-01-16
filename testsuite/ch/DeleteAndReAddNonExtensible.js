




var kNumProperties = 32;

var o = {};
for (var i = 0; i < kNumProperties; ++i)
o['a' + i] = i;

Object.preventExtensions(o); 

for (var i = 0; i < kNumProperties; ++i)
delete o['a' + i];

for (var i = 0; i < 0x21; ++i)
o['a0'] = 1; 

WScript.Echo('pass');
