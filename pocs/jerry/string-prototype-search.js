assert ("abcabbcd".search (/abb+c/) === 3);
assert ("ababbccabd".search ("((?:(ax))|(bx)|ab*c+)") === 2);
assert ("acbaabcabcabc".search (/b+c/g) === 5);
assert ("abcabd".search ("c?a+d") === -1);

assert (String.prototype.search.call ({}, "ec+t") === 4);

try
{
  String.prototype.search.call (null, "u");
  assert (false);
}
catch (e)
{
  assert (e instanceof TypeError);
}

var regexp = /x/g;
regexp.lastIndex = "index";

assert ("aaxbb".search (regexp) === 2);
assert ("aabb".search (regexp) === -1);
assert (regexp.lastIndex === "index");

assert ("##\ud801\udc00".search ("\ud801") === 2);
assert ("##\ud801\udc00".search ("\udc00") === 3);
