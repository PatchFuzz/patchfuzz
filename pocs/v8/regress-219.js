function print(re, global, multiline, ignoreCase) {
  var name = re + " flag: ";
  (global ? assertTrue : assertFalse)(re.global, name + "g");
  (multiline ? assertTrue : assertFalse)(re.multiline, name + "m");
  (ignoreCase ? assertTrue : assertFalse)(re.ignoreCase, name + "i");
}

var re = /a/;
print(re, false, false, false)

re = /a/gim;
print(re, true, true, true)

re = RegExp("a","");
print(re, false, false, false)

re = RegExp("a", "gim");
print(re, true, true, true)



print("/a/ii");

print("/a/gii");

print("/a/igi");

print("/a/iig");

print("/a/gimi");

print("/a/giim");

print("/a/igim");

print(function(){ return RegExp("a", "ii"); })

print(function(){ return RegExp("a", "gii"); })

print(function(){ return RegExp("a", "igi"); })

print(function(){ return RegExp("a", "iig"); })

print(function(){ return RegExp("a", "gimi"); })

print(function(){ return RegExp("a", "giim"); })

print(function(){ return RegExp("a", "igim"); })



print("/a/iii");

print("/a/giii");

print("/a/igii");

print("/a/iigi");

print("/a/iiig");

print("/a/miiig");

print(function(){ return RegExp("a", "iii"); })

print(function(){ return RegExp("a", "giii"); })

print(function(){ return RegExp("a", "igii"); })

print(function(){ return RegExp("a", "iigi"); })

print(function(){ return RegExp("a", "iiig"); })

print(function(){ return RegExp("a", "miiig"); })



print("/a/arglebargleglopglyf");

print("/a/arglebargleglopglif");

print("/a/arglebargleglopglym");

print("/a/arglebargleglopglim");



var re = /a/gmi;
print(re, true, true, true)

print("/a/Gmi");

print("/a/gMi");

print("/a/gmI");

print("/a/GMi");

print("/a/GmI");

print("/a/gMI");

print("/a/GMI");



print("/a/\\u0067");
print("/a/\\u0069");
print("/a/\\u006d");
print("/a/\\u006D");
