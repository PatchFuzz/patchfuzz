













var r;

r = new RegExp ("[abc]*").exec("aaabbcccabcacbacabacbacab");
assert (r == "aaabbcccabcacbacabacbacab");

r = new RegExp ("[abc]*").exec("aaabbcccabdcacb");
assert (r == "aaabbcccab");

r = new RegExp ("[abc]*").exec("defghjklmnopqrstuvwxyz");
assert (r == "");

r = new RegExp ("[a-z]*").exec("abcdefghjklmnopqrstuvwxyz");
assert (r == "abcdefghjklmnopqrstuvwxyz");

r = new RegExp ("[A-Z]*").exec("abcdefghjklmnopqrstuvwxyz");
assert (r == "");

r = new RegExp ("[^a-z]*").exec("abcdefghjklmnopqrstuvwxyz");
assert (r == "");

r = new RegExp ("[^A-Z]*").exec("abcdefghjklmnopqrstuvwxyz");
assert (r == "abcdefghjklmnopqrstuvwxyz");

r = new RegExp ("\\d*").exec("abcdefghjklmnopqrstuvwxyz");
assert (r == "");

r = new RegExp ("\\D*").exec("abcdefghjklmnopqrstuvwxyz");
assert (r == "abcdefghjklmnopqrstuvwxyz");

r = new RegExp ("\\w*").exec("abcdefghjklmnopqrstuvwxyz");
assert (r == "abcdefghjklmnopqrstuvwxyz");

r = new RegExp ("\\W*").exec("abcdefghjklmnopqrstuvwxyz");
assert (r == "");

r = new RegExp ("\\s*").exec("abcdefghjklmnopqrstuvwxyz");
assert (r == "");

r = new RegExp ("\\S*").exec("abcdefghjklmnopqrstuvwxyz");
assert (r == "abcdefghjklmnopqrstuvwxyz");

r = new RegExp ("[\\d]*").exec("abcdefghjklmnopqrstuvwxyz");
assert (r == "");

r = new RegExp ("[\\D]*").exec("abcdefghjklmnopqrstuvwxyz");
assert (r == "abcdefghjklmnopqrstuvwxyz");

r = new RegExp ("[\\w]*").exec("abcdefghjklmnopqrstuvwxyz");
assert (r == "abcdefghjklmnopqrstuvwxyz");

r = new RegExp ("[\\W]*").exec("abcdefghjklmnopqrstuvwxyz");
assert (r == "");

r = new RegExp ("[\\s]*").exec("abcdefghjklmnopqrstuvwxyz");
assert (r == "");

r = new RegExp ("[\\S]*").exec("abcdefghjklmnopqrstuvwxyz");
assert (r == "abcdefghjklmnopqrstuvwxyz");

r = new RegExp ("[^\\d]*").exec("abcdefghjklmnopqrstuvwxyz");
assert (r == "abcdefghjklmnopqrstuvwxyz");

r = new RegExp ("[^\\D]*").exec("abcdefghjklmnopqrstuvwxyz");
assert (r == "");

r = new RegExp ("[^\\w]*").exec("abcdefghjklmnopqrstuvwxyz");
assert (r == "");

r = new RegExp ("[^\\W]*").exec("abcdefghjklmnopqrstuvwxyz");
assert (r == "abcdefghjklmnopqrstuvwxyz");

r = new RegExp ("[^\\s]*").exec("abcdefghjklmnopqrstuvwxyz");
assert (r == "abcdefghjklmnopqrstuvwxyz");

r = new RegExp ("[^\\S]*").exec("abcdefghjklmnopqrstuvwxyz");
assert (r == "");

r = new RegExp ("\\d*").exec("0123456789");
assert (r == "0123456789");

try
{
  r = new RegExp("[");
  assert (false);
}
catch (e)
{
  assert (e instanceof SyntaxError);
}

try
{
  r = new RegExp("[\\");
  assert (false);
}
catch (e)
{
  assert (e instanceof SyntaxError);
}

r = new RegExp ("^[\\u0061-\\u007a]+$").exec("abcdefghjklmnopqrstuvwxyz");
assert (r == "abcdefghjklmnopqrstuvwxyz");

r = new RegExp ("^[\\u0061-\\u007a]+").exec("abcdefghjklmnopqrstuvwxyz");
assert (r == "abcdefghjklmnopqrstuvwxyz");

r = new RegExp ("[\\u0061-\\u007a]+$").exec("abcdefghjklmnopqrstuvwxyz");
assert (r == "abcdefghjklmnopqrstuvwxyz");

r = new RegExp ("^[\\x61-\\x7a]+$").exec("abcdefghjklmnopqrstuvwxyz");
assert (r == "abcdefghjklmnopqrstuvwxyz");

r = new RegExp ("^[\\x61-\\x7a]+").exec("abcdefghjklmnopqrstuvwxyz");
assert (r == "abcdefghjklmnopqrstuvwxyz");

r = new RegExp ("[\\x61-\\x7a]+$").exec("abcdefghjklmnopqrstuvwxyz");
assert (r == "abcdefghjklmnopqrstuvwxyz");

r = new RegExp("[\\u0800-\\uffff]", "g");
assert (r.test ("\uffff"));
assert (!r.test ("\uffff"));

r = new RegExp("[\0]");
assert (r.test ("\0"));
assert (!r.test ("0"));

r = new RegExp("[\0-\1]");
assert (r.test ("\1"));
