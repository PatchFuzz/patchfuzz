













function f () {
  RegExp("[\\s-a]", "u");
}

var arr = new Float64Array();
assert(arr.reduceRight(SyntaxError, f, 'RegExp("[\\s-a]", "u"): ') === f);
