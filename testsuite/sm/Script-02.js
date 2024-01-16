

load(libdir + 'asserts.js');

assertThrowsInstanceOf(function() { Debugger.Script(); }, TypeError);
assertThrowsInstanceOf(function() { new Debugger.Script(); }, TypeError);
