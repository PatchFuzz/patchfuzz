function collapse(flags) {
  var src = "(?:";
  for (var i = 128; i < 0x1000; i++) {
    src += String.fromCharCode(96 + i % 26) + String.fromCharCode(i) + "|";
  }
  src += "aa)";
  var collapsible = new RegExp(src, flags);
  var subject = "zzzzzzz" + String.fromCharCode(3000);
  for (var i = 0; i < 1000; i++) {
    subject += "xxxxxxx";
  }
  for (var i = 0; i < 2000; i++) {
    print(collapsible.test(subject));
  }
}

collapse("i");
collapse("");
