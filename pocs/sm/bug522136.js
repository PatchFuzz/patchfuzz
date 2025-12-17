var Q = 0;
var thrown = false;
try {
   (function f(i) { Q = i; if (i == 200000) return; f(i+1); })(1)
} catch (e) {
    thrown = true;
}


print(thrown && Q > 350, true);
