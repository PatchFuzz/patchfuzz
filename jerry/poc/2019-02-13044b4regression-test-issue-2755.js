













try {
  var v0 = Object.freeze (RegExp ($, "g")).exec ();
  var $ = v0.every (Function ("a1,a2,a3",  "this.shifted=a3+a2+a1.length;"), v0.hasOwnProperty);
  print(false);
} catch (e) {
  print(e instanceof TypeError);
}
