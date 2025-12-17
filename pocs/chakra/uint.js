let asmHeap = new ArrayBuffer(1 << 20);
let m1 = function (stdlib, foreign, heap) {
  'use asm';
  function f(d0) {
    d0 = +d0;
    return 1 % ~~d0 | 0;
  }
  return f;
}({}, {}, asmHeap);


m2 = function (stdlib, foreign, heap) {
  'use asm';
  function f(d0) {
    d0 = +d0;
    return 1 % (~~d0 >>> 0) | 0;
  }
  return f;
}({}, {}, asmHeap);

print(m1(4294967295));
print(m1(4294967295));

print(m2(4294967295));
print(m2(4294967295));
