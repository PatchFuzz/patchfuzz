













var a = eval("Object.prototype[1] = 0;\
              Promise.all()")
a.catch(function(err) {
  assert(err instanceof TypeError);
});
