let a = [0];
let l = {
  valueOf: function() {
    Object.freeze(a);
    return 1;
  }
};
a.length = l;
