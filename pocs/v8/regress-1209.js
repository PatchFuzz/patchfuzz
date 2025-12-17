function crashMe(n) {
  var nasty = [];
  while (n--)
    nasty.push("a" + 0);
  return Function.apply(null, nasty);
}
crashMe(64 + 1).length;
