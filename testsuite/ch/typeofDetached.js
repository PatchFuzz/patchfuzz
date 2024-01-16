




const obj = {};
const f32 = new Float32Array();
function foo() {
  return typeof f32[obj.missingprop & 1];
}
ArrayBuffer.detach(f32.buffer);
for (let i = 0; i < 1000; ++i) {
  foo();
}
foo();
console.log("pass");
