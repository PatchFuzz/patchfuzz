;

var g = newGlobal({alwaysUseFdlibm: true})

var code = (fun) => {
  return `(function asm(glob) {
    "use asm";
    var sq=glob.Math.${fun}; function f(d) { d=+d; return +sq(d) } return f;
  })`;
}


let asmSin = g.eval(code("sin"));
print(asmSin, {Math: {sin: Math.sin}});


const sin = asmLink(asmSin, {Math: {sin: g.Math.sin}});
print(sin(35*Math.LN2   ), -0.765996413898051);
print(sin(110*Math.LOG2E),  0.9989410140273757);
print(sin(7*Math.LOG10E ),  0.10135692924965616);


asmSin = eval(code("sin"))
print(asmSin, {Math: {sin: g.Math.sin}});


asmLink(asmSin, {Math: {sin: Math.sin}});


let asmCos = g.eval(code("cos"));
print(asmCos, {Math: {cos: Math.cos}});
const cos = asmLink(asmCos, {Math: {cos: g.Math.cos}});
print(cos(1e130          ), -0.767224894221913);
print(cos(1e272          ), -0.7415825695514536);
print(cos(1e284          ),  0.7086865671674247);
print(cos(1e75           ), -0.7482651726250321);
print(cos(57*Math.E      ), -0.536911695749024);
print(cos(21*Math.LN2    ), -0.4067775970251724);
print(cos(51*Math.LN2    ), -0.7017203400855446);
print(cos(21*Math.SQRT1_2), -0.6534063185820198);
print(cos(17*Math.LOG10E ),  0.4537557425982784);
print(cos(2*Math.LOG10E  ),  0.6459044007438142);


let asmTan = g.eval(code("tan"));
print(asmTan, {Math: {tan: Math.tan}});
const tan = asmLink(asmTan, {Math: {tan: g.Math.tan}});
print(tan(1e140          ),  0.7879079967710036);
print(tan(6*Math.E       ),  0.6866761546452431);
print(tan(6*Math.LN2     ),  1.6182817135715877);
print(tan(10*Math.LOG2E  ), -3.3537128705376014);
print(tan(17*Math.SQRT2  ), -1.9222955461799982);
print(tan(34*Math.SQRT1_2), -1.9222955461799982);
print(tan(10*Math.LOG10E ),  2.5824856130712432);
