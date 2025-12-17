var src = "";
for (var i = 0; i < 100; i++) {
  src += "function foo" + i + "() { foo" + (i+1) + "(); }"
}
eval(src);

function foo100() {
  let g = newGlobal({newCompartment: true});
  let d = new g.Debugger(this);

  
  
  
  
  
  
  oomAtAllocation(5000);
  d.onEnterFrame = () => {}
}
try {
  foo0();
} catch {}
