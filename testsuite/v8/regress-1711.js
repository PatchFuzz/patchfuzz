





























var side_effect = false;
var separator = new Object();
separator.toString = function() {
  side_effect = true;
  return undefined;
}
'subject'.split(separator, 0);
assertTrue(side_effect);
