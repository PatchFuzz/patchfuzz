





var o = {}
Object.defineProperty(o, "z", {
    set: function() {
      %DeoptimizeFunction(f);
    },
});

function f(o) {
  return 19 + (void(o.z = 12));
}

f(o);
