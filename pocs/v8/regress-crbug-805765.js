var code = "(function* gen() {"
for (var i = 0; i < 256; ++i) {
  code += `var v_${i} = 0;`
}
code += `yield; })`

var gen = eval(code);
var g = gen();
g.next();
