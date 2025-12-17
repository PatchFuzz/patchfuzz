evaluate(`function a01(){ return a + b; }`)
evaluate(`function a02(){ return a + b; }`)
evaluate(`function a03(){ return a + b + c; }`)
print(hasSameBytecodeData(a01, a02), true)
print(hasSameBytecodeData(a01, a03), false)



evaluate(`function   b(){}`)
evaluate(`function b01(){}`)
evaluate(`function b02 (){}`)
evaluate(`function b03( ){}`)
evaluate(`function b04() {}`)
evaluate(`function b05(){ }`)
print(hasSameBytecodeData(b, b01), true)
print(hasSameBytecodeData(b, b02), true)
print(hasSameBytecodeData(b, b03), false)
print(hasSameBytecodeData(b, b04), false)
print(hasSameBytecodeData(b, b05), false)



evaluate(`function c01(){ return a; }`)
evaluate(`function c02(){ return b; }`)
evaluate(`function c03(){ return cc; }`)
print(hasSameBytecodeData(c01, c02), true)
print(hasSameBytecodeData(c01, c03), false)



evaluate(`function d01(){ return "AA"; }`)
evaluate(`function d02(){ return "BB"; }`)
print(hasSameBytecodeData(d01, d02), true)



evaluate("function e01(){ return a`AA`; }")
evaluate("function e02(){ return b`BB`; }")
print(hasSameBytecodeData(e01, e02), true)



evaluate(`function f01(){ return { a: 1 }; }`)
evaluate(`function f02(){ return { b: 1 }; }`)
evaluate(`function f03(){ return { b: 2 }; }`)
print(hasSameBytecodeData(f01, f02), true)
print(hasSameBytecodeData(f01, f03), false)



evaluate(`function g01(){ return () => 0; }`)
evaluate(`function g02(){ return () => 0; }`)
evaluate(`function g03(){ return () => a; }`)
print(hasSameBytecodeData(g01, g02), true)
print(hasSameBytecodeData(g01, g03), true)



evaluate(`function h01(){ return 0; }`)
evaluate(`\nfunction h02(){ return 0; }`)
evaluate(`\n\n\n\n\n\n\nfunction h03(){ return 0; }`)
print(hasSameBytecodeData(h01, h02), true)
print(hasSameBytecodeData(h01, h03), true)




evaluate(`function i01(){ return\n\n\n\n\n\n\n\n0; }`)
evaluate(`\nfunction i02(){ return\n\n\n\n\n\n\n\n0; }`)
evaluate(`\n\n\n\n\n\n\nfunction i03(){ return\n\n\n\n\n\n\n\n0; }`)
print(hasSameBytecodeData(i01, i02), true)
print(hasSameBytecodeData(i01, i03), true)



evaluate(`function j01(){ return 0; }`)
evaluate(` function j02(){ return 0; }`)
evaluate(` \tfunction j03(){ return 0; }`)
print(hasSameBytecodeData(j01, j02), true)
print(hasSameBytecodeData(j01, j03), true)



evaluate(`function k01      ()    { return 0; }`)
evaluate(`var k02 = function()    { return 0; }`)
evaluate(`var k03 =         () => { return 0; }`)
print(hasSameBytecodeData(k01, k02), true)
print(hasSameBytecodeData(k01, k03), true)



let l02_global = newGlobal({newCompartment: false});
let l03_global = newGlobal({newCompartment: true});
evaluate(`function l01() { return 0; }`)
l02_global.evaluate(`function l02() { return 0; }`)
l03_global.evaluate(`function l03() { return 0; }`)
print(hasSameBytecodeData(l01, l02_global.l02), true)
print(hasSameBytecodeData(l01, l03_global.l03), true)
