





































function assertFlags(re, global, multiline, ignoreCase) {
  var name = re + " flag: ";
  (global ? assertTrue : assertFalse)(re.global, name + "g");
  (multiline ? assertTrue : assertFalse)(re.multiline, name + "m");
  (ignoreCase ? assertTrue : assertFalse)(re.ignoreCase, name + "i");
}

var re = /a/;
assertFlags(re, false, false, false)

re = /a/gim;
assertFlags(re, true, true, true)

re = RegExp("a","");
assertFlags(re, false, false, false)

re = RegExp("a", "gim");
assertFlags(re, true, true, true)



assertThrows("/a/ii");

assertThrows("/a/gii");

assertThrows("/a/igi");

assertThrows("/a/iig");

assertThrows("/a/gimi");

assertThrows("/a/giim");

assertThrows("/a/igim");

assertThrows(function(){ return RegExp("a", "ii"); })

assertThrows(function(){ return RegExp("a", "gii"); })

assertThrows(function(){ return RegExp("a", "igi"); })

assertThrows(function(){ return RegExp("a", "iig"); })

assertThrows(function(){ return RegExp("a", "gimi"); })

assertThrows(function(){ return RegExp("a", "giim"); })

assertThrows(function(){ return RegExp("a", "igim"); })



assertThrows("/a/iii");

assertThrows("/a/giii");

assertThrows("/a/igii");

assertThrows("/a/iigi");

assertThrows("/a/iiig");

assertThrows("/a/miiig");

assertThrows(function(){ return RegExp("a", "iii"); })

assertThrows(function(){ return RegExp("a", "giii"); })

assertThrows(function(){ return RegExp("a", "igii"); })

assertThrows(function(){ return RegExp("a", "iigi"); })

assertThrows(function(){ return RegExp("a", "iiig"); })

assertThrows(function(){ return RegExp("a", "miiig"); })



assertThrows("/a/arglebargleglopglyf");

assertThrows("/a/arglebargleglopglif");

assertThrows("/a/arglebargleglopglym");

assertThrows("/a/arglebargleglopglim");



var re = /a/gmi;
assertFlags(re, true, true, true)

assertThrows("/a/Gmi");

assertThrows("/a/gMi");

assertThrows("/a/gmI");

assertThrows("/a/GMi");

assertThrows("/a/GmI");

assertThrows("/a/gMI");

assertThrows("/a/GMI");



assertThrows("/a/\\u0067");
assertThrows("/a/\\u0069");
assertThrows("/a/\\u006d");
assertThrows("/a/\\u006D");
