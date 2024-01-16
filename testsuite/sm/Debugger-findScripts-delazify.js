



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

assertEq(g.eval(`isLazyFunction(f1)`), true);
assertEq(g.eval(`isLazyFunction(f2)`), true);
assertEq(g.eval(`isLazyFunction(f3)`), true);

scripts = dbg.findScripts({url, line});
assertEq(scripts.length, 1);
assertEq(scripts.map(s => s.displayName).sort().join(","), "f2");

assertEq(g.eval(`isLazyFunction(f1)`), true);
assertEq(g.eval(`isLazyFunction(f2)`), false);
assertEq(g.eval(`isLazyFunction(f3)`), true);



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

assertEq(g.eval(`isLazyFunction(f1)`), true);
assertEq(g.eval(`isLazyFunction(f2)`), true);
assertEq(g.eval(`isLazyFunction(f3)`), true);
assertEq(g.eval(`isLazyFunction(f4)`), true);

scripts = dbg.findScripts({url, line});
assertEq(scripts.length, 1);
assertEq(scripts.map(s => s.displayName).sort().join(","), "f3");

assertEq(g.eval(`isLazyFunction(f1)`), true);

assertEq(g.eval(`isLazyFunction(f2)`), false);
assertEq(g.eval(`isLazyFunction(f3)`), false);
assertEq(g.eval(`isLazyFunction(f4)`), true);




[dbg, g, line] = newTestcase(`
function f1() {}
function f2() {
} function f3() {} function f4() {} function f5() { 
}
function f6() {}
`);

assertEq(g.eval(`isLazyFunction(f1)`), true);
assertEq(g.eval(`isLazyFunction(f2)`), true);
assertEq(g.eval(`isLazyFunction(f3)`), true);
assertEq(g.eval(`isLazyFunction(f4)`), true);
assertEq(g.eval(`isLazyFunction(f5)`), true);
assertEq(g.eval(`isLazyFunction(f6)`), true);

scripts = dbg.findScripts({url, line});
assertEq(scripts.length, 4);
assertEq(scripts.map(s => s.displayName).sort().join(","), "f2,f3,f4,f5");

assertEq(g.eval(`isLazyFunction(f1)`), true);
assertEq(g.eval(`isLazyFunction(f2)`), false);
assertEq(g.eval(`isLazyFunction(f3)`), false);
assertEq(g.eval(`isLazyFunction(f4)`), false);
assertEq(g.eval(`isLazyFunction(f5)`), false);
assertEq(g.eval(`isLazyFunction(f6)`), true);


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

assertEq(g.eval(`isLazyFunction(f1)`), true);
assertEq(g.eval(`isLazyFunction(f2)`), true);
assertEq(g.eval(`isLazyFunction(f3)`), true);

scripts = dbg.findScripts({url, line});
assertEq(scripts.length, 6);
assertEq(scripts.map(s => s.displayName).sort().join(","), "f2,g2,h2,h3,h4,h5");

assertEq(g.eval(`isLazyFunction(f1)`), true);
assertEq(g.eval(`isLazyFunction(f2)`), false);
assertEq(g.eval(`isLazyFunction(f3)`), true);
g.eval(`var [g1, g2, g3] = f2();`);
assertEq(g.eval(`isLazyFunction(g1)`), true);
assertEq(g.eval(`isLazyFunction(g2)`), false);
assertEq(g.eval(`isLazyFunction(g3)`), true);
g.eval(`var [h1, h2, h3, h4, h5, h6] = g2();`);
assertEq(g.eval(`isLazyFunction(h1)`), true);
assertEq(g.eval(`isLazyFunction(h2)`), false);
assertEq(g.eval(`isLazyFunction(h3)`), false);
assertEq(g.eval(`isLazyFunction(h4)`), false);
assertEq(g.eval(`isLazyFunction(h5)`), false);
assertEq(g.eval(`isLazyFunction(h6)`), true);


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

assertEq(g.eval(`isLazyFunction(f1)`), true);

scripts = dbg.findScripts({url, line});
assertEq(scripts.length, 4);
assertEq(scripts.map(s => s.displayName).sort().join(","), "f1,g2,g3,g4");

assertEq(g.eval(`isLazyFunction(f1)`), false);

g.eval(`var [g1, g2, g3, g4, g5] = f1();`);

assertEq(g.eval(`isLazyFunction(g1)`), true);
assertEq(g.eval(`isLazyFunction(g2)`), false);
assertEq(g.eval(`isLazyFunction(g3)`), false);
assertEq(g.eval(`isLazyFunction(g4)`), false);
assertEq(g.eval(`isLazyFunction(g5)`), true);


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

assertEq(g.eval(`isLazyFunction(f1)`), true);
assertEq(g.eval(`isLazyFunction(O.m2)`), true);
assertEq(g.eval(`isLazyFunction(f2)`), true);
assertEq(g.eval(`isLazyFunction(O.m1)`), true);
assertEq(g.eval(`isLazyFunction(f3)`), true);
assertEq(g.eval(`isLazyFunction(O.m3)`), true);

scripts = dbg.findScripts({url, line});
assertEq(scripts.length, 2);
assertEq(scripts.map(s => s.displayName).sort().join(","), "f2,");

assertEq(scripts.map(s => `${s.displayName}(${s.parameterNames.join(",")})`)
         .sort().join(","), "f2(),undefined(p2)");

assertEq(g.eval(`isLazyFunction(f1)`), true);

assertEq(g.eval(`isLazyFunction(O.m1)`), false);
assertEq(g.eval(`isLazyFunction(f2)`), false);
assertEq(g.eval(`isLazyFunction(O.m2)`), false);
assertEq(g.eval(`isLazyFunction(f3)`), true);
assertEq(g.eval(`isLazyFunction(O.m3)`), true);

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

assertEq(g.eval(`isLazyFunction(f1)`), true);
assertEq(g.eval(`isLazyFunction(O.m1)`), true);
assertEq(g.eval(`isLazyFunction(f2)`), true);
assertEq(g.eval(`isLazyFunction(O.m2)`), true);
assertEq(g.eval(`isLazyFunction(f3)`), true);
assertEq(g.eval(`isLazyFunction(O.m3)`), true);

scripts = dbg.findScripts({url, line});
assertEq(scripts.length, 2);
assertEq(scripts.map(s => `${s.displayName}(${s.parameterNames.join(",")})`)
         .sort().join(","), "f2(),undefined(p2)");

assertEq(g.eval(`isLazyFunction(f1)`), true);
assertEq(g.eval(`isLazyFunction(O.m1)`), true);
assertEq(g.eval(`isLazyFunction(f2)`), false);
assertEq(g.eval(`isLazyFunction(O.m2)`), false);
assertEq(g.eval(`isLazyFunction(f3)`), true);
assertEq(g.eval(`isLazyFunction(O.m3)`), true);


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

assertEq(g.eval(`isLazyFunction(C)`), true);
assertEq(g.eval(`isLazyFunction(C.prototype.m1)`), true);
assertEq(g.eval(`isLazyFunction(C.prototype.m2)`), true);
assertEq(g.eval(`isLazyFunction(C.prototype.m3)`), true);
assertEq(g.eval(`isLazyFunction(C.prototype.m4)`), true);
assertEq(g.eval(`isLazyFunction(C.prototype.m5)`), true);

scripts = dbg.findScripts({url, line});
assertEq(scripts.length, 3);
assertEq(scripts.map(s => s.displayName).sort().join(","), "m2,m3,m4");

assertEq(g.eval(`isLazyFunction(C)`), true);
assertEq(g.eval(`isLazyFunction(C.prototype.m1)`), true);
assertEq(g.eval(`isLazyFunction(C.prototype.m2)`), false);
assertEq(g.eval(`isLazyFunction(C.prototype.m3)`), false);
assertEq(g.eval(`isLazyFunction(C.prototype.m4)`), false);
assertEq(g.eval(`isLazyFunction(C.prototype.m5)`), true);



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

assertEq(g.eval(`isLazyFunction(f1)`), true);
assertEq(g.eval(`isLazyFunction(f2)`), true);
assertEq(g.eval(`isLazyFunction(f3)`), true);
assertEq(g.eval(`isLazyFunction(f4)`), true);

scripts = dbg.findScripts({url, line});
assertEq(scripts.length, 0);

assertEq(g.eval(`isLazyFunction(f1)`), true);

assertEq(g.eval(`isLazyFunction(f2)`), false);
assertEq(g.eval(`isLazyFunction(f3)`), true);
assertEq(g.eval(`isLazyFunction(f4)`), true);

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

assertEq(g.eval(`isLazyFunction(f1)`), true);
assertEq(g.eval(`isLazyFunction(f2)`), true);
assertEq(g.eval(`isLazyFunction(f3)`), true);
assertEq(g.eval(`isLazyFunction(f4)`), true);

scripts = dbg.findScripts({url, line});
assertEq(scripts.length, 0);

assertEq(g.eval(`isLazyFunction(f1)`), true);

assertEq(g.eval(`isLazyFunction(f2)`), false);
assertEq(g.eval(`isLazyFunction(f3)`), true);
assertEq(g.eval(`isLazyFunction(f4)`), true);

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

assertEq(g.eval(`isLazyFunction(f1)`), true);
assertEq(g.eval(`isLazyFunction(f2)`), true);
assertEq(g.eval(`isLazyFunction(f3)`), true);
assertEq(g.eval(`isLazyFunction(f4)`), true);

scripts = dbg.findScripts({url, line});
assertEq(scripts.length, 1);
assertEq(scripts.map(s => s.displayName).sort().join(","), "f3");

assertEq(g.eval(`isLazyFunction(f1)`), true);

assertEq(g.eval(`isLazyFunction(f2)`), false);
assertEq(g.eval(`isLazyFunction(f3)`), false);
assertEq(g.eval(`isLazyFunction(f4)`), true);

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

assertEq(g.eval(`isLazyFunction(f1)`), true);
assertEq(g.eval(`isLazyFunction(f2)`), true);
assertEq(g.eval(`isLazyFunction(f3)`), true);
assertEq(g.eval(`isLazyFunction(f4)`), true);

scripts = dbg.findScripts({url, line});
assertEq(scripts.length, 1);
assertEq(scripts.map(s => s.displayName).sort().join(","), "f3");

assertEq(g.eval(`isLazyFunction(f1)`), true);
assertEq(g.eval(`isLazyFunction(f2)`), true);
assertEq(g.eval(`isLazyFunction(f3)`), false);
assertEq(g.eval(`isLazyFunction(f4)`), true);



[dbg, g, line] = newTestcase(`
function f1() {
}
function f2() {
}

function f3() {
}
`);

assertEq(g.eval(`isLazyFunction(f1)`), true);
assertEq(g.eval(`isLazyFunction(f2)`), true);
assertEq(g.eval(`isLazyFunction(f3)`), true);

scripts = dbg.findScripts({url, line});
assertEq(scripts.length, 0);

assertEq(g.eval(`isLazyFunction(f1)`), true);
assertEq(g.eval(`isLazyFunction(f2)`), false);
assertEq(g.eval(`isLazyFunction(f3)`), true);



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

assertEq(g.eval(`isLazyFunction(f1)`), true);
assertEq(g.eval(`isLazyFunction(f2)`), true);
assertEq(g.eval(`isLazyFunction(f3)`), true);
assertEq(g.eval(`isLazyFunction(f4)`), true);


g.eval(`f3()`);

assertEq(g.eval(`isLazyFunction(f1)`), true);
assertEq(g.eval(`isLazyFunction(f2)`), true);
assertEq(g.eval(`isLazyFunction(f3)`), false);
assertEq(g.eval(`isLazyFunction(f4)`), true);

scripts = dbg.findScripts({url, line});
assertEq(scripts.length, 1);
assertEq(scripts.map(s => s.displayName).sort().join(","), "f3");

assertEq(g.eval(`isLazyFunction(f1)`), true);
assertEq(g.eval(`isLazyFunction(f2)`), true);
assertEq(g.eval(`isLazyFunction(f3)`), false);
assertEq(g.eval(`isLazyFunction(f4)`), true);



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

assertEq(g.eval(`isLazyFunction(f1)`), true);
assertEq(g.eval(`isLazyFunction(f2)`), true);
assertEq(g.eval(`isLazyFunction(f3)`), true);
assertEq(g.eval(`isLazyFunction(f4)`), true);


g.eval(`f3()`);

assertEq(g.eval(`isLazyFunction(f1)`), true);
assertEq(g.eval(`isLazyFunction(f2)`), true);
assertEq(g.eval(`isLazyFunction(f3)`), false);
assertEq(g.eval(`isLazyFunction(f4)`), true);

scripts = dbg.findScripts({url, line});
assertEq(scripts.length, 0);

assertEq(g.eval(`isLazyFunction(f1)`), true);
assertEq(g.eval(`isLazyFunction(f2)`), true);
assertEq(g.eval(`isLazyFunction(f3)`), false);
assertEq(g.eval(`isLazyFunction(f4)`), true);
