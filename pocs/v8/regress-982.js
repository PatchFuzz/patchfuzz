function f(a) {
 return {className: 'xxx'};
};

var x = 1;

function g(active) {
 for (i = 1; i <= 20000; i++) {
   if (i == active) {
     x = i;
     if (f("" + i) != null) { }
   } else {
     if (f("" + i) != null) { }
   }
 }
}

g(0);
