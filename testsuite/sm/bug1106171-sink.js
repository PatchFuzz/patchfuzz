



setJitCompilerOption("ion.warmup.trigger", 30);

var o = {
  a : 40,
  b : true
};

function f(a, b) {
    do {
        if (a == 0)
          return;
        a--;
    } while (true || this ? o.a-- : true);
}
f(200000, 0);
