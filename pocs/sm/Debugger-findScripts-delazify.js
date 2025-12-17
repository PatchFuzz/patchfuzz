function newTestcase(code) {
  var g = newGlobal({newCompartment: true});
  var dbg = new Debugger();
  var gw = dbg.addDebuggee(g);

  var lines = code.split('\n');
  
  
  var line = lines.findIndex(x => x.includes("<= line")) + 1;

  g.eval(code);

  
  relazifyFunctions();

  return [dbg, g, line];
}

var url = thisFilename();
var dbg, g, line, scripts;



[dbg, g, line] = newTestcase(`
function f1() {
}
function f2() {

}
function f3() {
}
`);

print(g.eval(`isLazyFunction(f1)`), true);
print(g.eval(`isLazyFunction(f2)`), true);
print(g.eval(`isLazyFunction(f3)`), true);

scripts = dbg.findScripts({url, line});
print(scripts.length, 1);
print(scripts.map(s => s.displayName).sort().join(","), "f2");

print(g.eval(`isLazyFunction(f1)`), true);
print(g.eval(`isLazyFunction(f2)`), false);
print(g.eval(`isLazyFunction(f3)`), true);



[dbg, g, line] = newTestcase(`
function f1() {
}
function f2() {
}
function f3() { 
}
function f4() {
}
`);

print(g.eval(`isLazyFunction(f1)`), true);
print(g.eval(`isLazyFunction(f2)`), true);
print(g.eval(`isLazyFunction(f3)`), true);
print(g.eval(`isLazyFunction(f4)`), true);

scripts = dbg.findScripts({url, line});
print(scripts.length, 1);
print(scripts.map(s => s.displayName).sort().join(","), "f3");

print(g.eval(`isLazyFunction(f1)`), true);

print(g.eval(`isLazyFunction(f2)`), false);
print(g.eval(`isLazyFunction(f3)`), false);
print(g.eval(`isLazyFunction(f4)`), true);




[dbg, g, line] = newTestcase(`
function f1() {}
function f2() {
} function f3() {} function f4() {} function f5() { 
}
function f6() {}
`);

print(g.eval(`isLazyFunction(f1)`), true);
print(g.eval(`isLazyFunction(f2)`), true);
print(g.eval(`isLazyFunction(f3)`), true);
print(g.eval(`isLazyFunction(f4)`), true);
print(g.eval(`isLazyFunction(f5)`), true);
print(g.eval(`isLazyFunction(f6)`), true);

scripts = dbg.findScripts({url, line});
print(scripts.length, 4);
print(scripts.map(s => s.displayName).sort().join(","), "f2,f3,f4,f5");

print(g.eval(`isLazyFunction(f1)`), true);
print(g.eval(`isLazyFunction(f2)`), false);
print(g.eval(`isLazyFunction(f3)`), false);
print(g.eval(`isLazyFunction(f4)`), false);
print(g.eval(`isLazyFunction(f5)`), false);
print(g.eval(`isLazyFunction(f6)`), true);


[dbg, g, line] = newTestcase(`
function f1() {}
function f2() {
  function g1() {
  }
  function g2() {
    function h1() {}
    function h2() {
    } function h3() {} function h4() {} function h5() { 
    }
    function h6() {}

    return [h1, h2, h3, h4, h5, h6];
  }
  function g3() {
  }

  return [g1, g2, g3];
}
function f3() {}
`);

print(g.eval(`isLazyFunction(f1)`), true);
print(g.eval(`isLazyFunction(f2)`), true);
print(g.eval(`isLazyFunction(f3)`), true);

scripts = dbg.findScripts({url, line});
print(scripts.length, 6);
print(scripts.map(s => s.displayName).sort().join(","), "f2,g2,h2,h3,h4,h5");

print(g.eval(`isLazyFunction(f1)`), true);
print(g.eval(`isLazyFunction(f2)`), false);
print(g.eval(`isLazyFunction(f3)`), true);
g.eval(`var [g1, g2, g3] = f2();`);
print(g.eval(`isLazyFunction(g1)`), true);
print(g.eval(`isLazyFunction(g2)`), false);
print(g.eval(`isLazyFunction(g3)`), true);
g.eval(`var [h1, h2, h3, h4, h5, h6] = g2();`);
print(g.eval(`isLazyFunction(h1)`), true);
print(g.eval(`isLazyFunction(h2)`), false);
print(g.eval(`isLazyFunction(h3)`), false);
print(g.eval(`isLazyFunction(h4)`), false);
print(g.eval(`isLazyFunction(h5)`), false);
print(g.eval(`isLazyFunction(h6)`), true);


[dbg, g, line] = newTestcase(`
function f1(
  a = function g1() {},
  b = function g2() {
  }, c = function g3() {}, d = function g4() { 
  },
  e = function g5() {},
) {
  return [a, b, c, d, e];
}
`);

print(g.eval(`isLazyFunction(f1)`), true);

scripts = dbg.findScripts({url, line});
print(scripts.length, 4);
print(scripts.map(s => s.displayName).sort().join(","), "f1,g2,g3,g4");

print(g.eval(`isLazyFunction(f1)`), false);

g.eval(`var [g1, g2, g3, g4, g5] = f1();`);

print(g.eval(`isLazyFunction(g1)`), true);
print(g.eval(`isLazyFunction(g2)`), false);
print(g.eval(`isLazyFunction(g3)`), false);
print(g.eval(`isLazyFunction(g4)`), false);
print(g.eval(`isLazyFunction(g5)`), true);


[dbg, g, line] = newTestcase(`
var f1, f2, f3;
var O = {
  [(f1 = () => 0, "m1")]() {
  },
  [(f2 = () => 0, "m2")](p2) { 
  },
  [(f3 = () => 0, "m3")]() {
  },
}
`);

print(g.eval(`isLazyFunction(f1)`), true);
print(g.eval(`isLazyFunction(O.m2)`), true);
print(g.eval(`isLazyFunction(f2)`), true);
print(g.eval(`isLazyFunction(O.m1)`), true);
print(g.eval(`isLazyFunction(f3)`), true);
print(g.eval(`isLazyFunction(O.m3)`), true);

scripts = dbg.findScripts({url, line});
print(scripts.length, 2);
print(scripts.map(s => s.displayName).sort().join(","), "f2,");

print(scripts.map(s => `${s.displayName}(${s.parameterNames.join(",")})`)
         .sort().join(","), "f2(),undefined(p2)");

print(g.eval(`isLazyFunction(f1)`), true);

print(g.eval(`isLazyFunction(O.m1)`), false);
print(g.eval(`isLazyFunction(f2)`), false);
print(g.eval(`isLazyFunction(O.m2)`), false);
print(g.eval(`isLazyFunction(f3)`), true);
print(g.eval(`isLazyFunction(O.m3)`), true);

[dbg, g, line] = newTestcase(`
var f1, f2, f3;
var O = {
  [(f1 = () => 0, "m1")]() {
  },
  [(f2 = () => 0 +
  1, "m2")](p2) { 
  },
  [(f3 = () => 0, "m3")]() {
  },
}
`);

print(g.eval(`isLazyFunction(f1)`), true);
print(g.eval(`isLazyFunction(O.m1)`), true);
print(g.eval(`isLazyFunction(f2)`), true);
print(g.eval(`isLazyFunction(O.m2)`), true);
print(g.eval(`isLazyFunction(f3)`), true);
print(g.eval(`isLazyFunction(O.m3)`), true);

scripts = dbg.findScripts({url, line});
print(scripts.length, 2);
print(scripts.map(s => `${s.displayName}(${s.parameterNames.join(",")})`)
         .sort().join(","), "f2(),undefined(p2)");

print(g.eval(`isLazyFunction(f1)`), true);
print(g.eval(`isLazyFunction(O.m1)`), true);
print(g.eval(`isLazyFunction(f2)`), false);
print(g.eval(`isLazyFunction(O.m2)`), false);
print(g.eval(`isLazyFunction(f3)`), true);
print(g.eval(`isLazyFunction(O.m3)`), true);


[dbg, g, line] = newTestcase(`

var C = class {
  constructor() {
  }
  m1() {}
  m2() {
  } m3() {} m4() { 
  }
  m5() {}
}
`);

print(g.eval(`isLazyFunction(C)`), true);
print(g.eval(`isLazyFunction(C.prototype.m1)`), true);
print(g.eval(`isLazyFunction(C.prototype.m2)`), true);
print(g.eval(`isLazyFunction(C.prototype.m3)`), true);
print(g.eval(`isLazyFunction(C.prototype.m4)`), true);
print(g.eval(`isLazyFunction(C.prototype.m5)`), true);

scripts = dbg.findScripts({url, line});
print(scripts.length, 3);
print(scripts.map(s => s.displayName).sort().join(","), "m2,m3,m4");

print(g.eval(`isLazyFunction(C)`), true);
print(g.eval(`isLazyFunction(C.prototype.m1)`), true);
print(g.eval(`isLazyFunction(C.prototype.m2)`), false);
print(g.eval(`isLazyFunction(C.prototype.m3)`), false);
print(g.eval(`isLazyFunction(C.prototype.m4)`), false);
print(g.eval(`isLazyFunction(C.prototype.m5)`), true);



[dbg, g, line] = newTestcase(`
function f1() {
}
function f2() {
}
function

f3() {
}
function f4() {
}
`);

print(g.eval(`isLazyFunction(f1)`), true);
print(g.eval(`isLazyFunction(f2)`), true);
print(g.eval(`isLazyFunction(f3)`), true);
print(g.eval(`isLazyFunction(f4)`), true);

scripts = dbg.findScripts({url, line});
print(scripts.length, 0);

print(g.eval(`isLazyFunction(f1)`), true);

print(g.eval(`isLazyFunction(f2)`), false);
print(g.eval(`isLazyFunction(f3)`), true);
print(g.eval(`isLazyFunction(f4)`), true);

[dbg, g, line] = newTestcase(`
function f1() {
}
function f2() {
}
function f3

() {
}
function f4() {
}
`);

print(g.eval(`isLazyFunction(f1)`), true);
print(g.eval(`isLazyFunction(f2)`), true);
print(g.eval(`isLazyFunction(f3)`), true);
print(g.eval(`isLazyFunction(f4)`), true);

scripts = dbg.findScripts({url, line});
print(scripts.length, 0);

print(g.eval(`isLazyFunction(f1)`), true);

print(g.eval(`isLazyFunction(f2)`), false);
print(g.eval(`isLazyFunction(f3)`), true);
print(g.eval(`isLazyFunction(f4)`), true);

[dbg, g, line] = newTestcase(`
function f1() {
}
function f2() {
}
function f3
( 
) {
}
function f4() {
}
`);

print(g.eval(`isLazyFunction(f1)`), true);
print(g.eval(`isLazyFunction(f2)`), true);
print(g.eval(`isLazyFunction(f3)`), true);
print(g.eval(`isLazyFunction(f4)`), true);

scripts = dbg.findScripts({url, line});
print(scripts.length, 1);
print(scripts.map(s => s.displayName).sort().join(","), "f3");

print(g.eval(`isLazyFunction(f1)`), true);

print(g.eval(`isLazyFunction(f2)`), false);
print(g.eval(`isLazyFunction(f3)`), false);
print(g.eval(`isLazyFunction(f4)`), true);

[dbg, g, line] = newTestcase(`
function f1() {
}
function f2() {
}
function f3
(

) {
}
function f4() {
}
`);

print(g.eval(`isLazyFunction(f1)`), true);
print(g.eval(`isLazyFunction(f2)`), true);
print(g.eval(`isLazyFunction(f3)`), true);
print(g.eval(`isLazyFunction(f4)`), true);

scripts = dbg.findScripts({url, line});
print(scripts.length, 1);
print(scripts.map(s => s.displayName).sort().join(","), "f3");

print(g.eval(`isLazyFunction(f1)`), true);
print(g.eval(`isLazyFunction(f2)`), true);
print(g.eval(`isLazyFunction(f3)`), false);
print(g.eval(`isLazyFunction(f4)`), true);



[dbg, g, line] = newTestcase(`
function f1() {
}
function f2() {
}

function f3() {
}
`);

print(g.eval(`isLazyFunction(f1)`), true);
print(g.eval(`isLazyFunction(f2)`), true);
print(g.eval(`isLazyFunction(f3)`), true);

scripts = dbg.findScripts({url, line});
print(scripts.length, 0);

print(g.eval(`isLazyFunction(f1)`), true);
print(g.eval(`isLazyFunction(f2)`), false);
print(g.eval(`isLazyFunction(f3)`), true);



[dbg, g, line] = newTestcase(`
function f1() {
}
function f2() {
}
function f3() {
  
}
function f4() {
}
`);

print(g.eval(`isLazyFunction(f1)`), true);
print(g.eval(`isLazyFunction(f2)`), true);
print(g.eval(`isLazyFunction(f3)`), true);
print(g.eval(`isLazyFunction(f4)`), true);


g.eval(`f3()`);

print(g.eval(`isLazyFunction(f1)`), true);
print(g.eval(`isLazyFunction(f2)`), true);
print(g.eval(`isLazyFunction(f3)`), false);
print(g.eval(`isLazyFunction(f4)`), true);

scripts = dbg.findScripts({url, line});
print(scripts.length, 1);
print(scripts.map(s => s.displayName).sort().join(","), "f3");

print(g.eval(`isLazyFunction(f1)`), true);
print(g.eval(`isLazyFunction(f2)`), true);
print(g.eval(`isLazyFunction(f3)`), false);
print(g.eval(`isLazyFunction(f4)`), true);



[dbg, g, line] = newTestcase(`
function f1() {
}
function f2() {
}
function f3() {
}

function f4() {
}
`);

print(g.eval(`isLazyFunction(f1)`), true);
print(g.eval(`isLazyFunction(f2)`), true);
print(g.eval(`isLazyFunction(f3)`), true);
print(g.eval(`isLazyFunction(f4)`), true);


g.eval(`f3()`);

print(g.eval(`isLazyFunction(f1)`), true);
print(g.eval(`isLazyFunction(f2)`), true);
print(g.eval(`isLazyFunction(f3)`), false);
print(g.eval(`isLazyFunction(f4)`), true);

scripts = dbg.findScripts({url, line});
print(scripts.length, 0);

print(g.eval(`isLazyFunction(f1)`), true);
print(g.eval(`isLazyFunction(f2)`), true);
print(g.eval(`isLazyFunction(f3)`), false);
print(g.eval(`isLazyFunction(f4)`), true);
