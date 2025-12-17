A = {x:{y:function(i){return i;}}};
B = function(x){return 17;};

foo = function () {
  A.x.y(B.apply(this, arguments));
};

foo();
foo("Hello", "There");
