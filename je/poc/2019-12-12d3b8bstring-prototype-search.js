













print("abcabbcd".search (/abb+c/) === 3);
print("ababbccabd".search ("((?:(ax))|(bx)|ab*c+)") === 2);
print("acbaabcabcabc".search (/b+c/g) === 5);
print("abcabd".search ("c?a+d") === -1);

print(String.prototype.search.call ({}, "ec+t") === 4);

try
{
  String.prototype.search.call (null, "u");
  print(false);
}
catch (e)
{
  print(e instanceof TypeError);
}

var regexp = /x/g;
regexp.lastIndex = "index";

print("aaxbb".search (regexp) === 2);
print("aabb".search (regexp) === -1);
print(regexp.lastIndex === "index");

print("##\ud801\udc00".search ("\ud801") === 2);
print("##\ud801\udc00".search ("\udc00") === 3);
