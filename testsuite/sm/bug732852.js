





var ary = ["\u001Cfoo", "\u001Dfoo", "\u001Efoo", "\u001Ffoo"];
for (var i in ary) {
  ary[Number(i)].search("var MYVAR='077';++MYVAR")
}
