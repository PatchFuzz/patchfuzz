;

var dbg = new Debugger();
var g = newGlobal();

print(() => dbg.findObjects({ class: null }), TypeError);
print(() => dbg.findObjects({ class: true }), TypeError);
print(() => dbg.findObjects({ class: 1337 }), TypeError);
print(() => dbg.findObjects({ class: /re/ }), TypeError);
print(() => dbg.findObjects({ class: {}   }), TypeError);
