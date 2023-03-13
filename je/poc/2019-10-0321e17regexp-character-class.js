













var r;

r = new RegExp ("[abc]*").exec("aaabbcccabcacbacabacbacab");
print(r == "aaabbcccabcacbacabacbacab");

r = new RegExp ("[abc]*").exec("aaabbcccabdcacb");
print(r == "aaabbcccab");

r = new RegExp ("[abc]*").exec("defghjklmnopqrstuvwxyz");
print(r == "");

r = new RegExp ("[a-z]*").exec("abcdefghjklmnopqrstuvwxyz");
print(r == "abcdefghjklmnopqrstuvwxyz");

r = new RegExp ("[A-Z]*").exec("abcdefghjklmnopqrstuvwxyz");
print(r == "");

r = new RegExp ("[^a-z]*").exec("abcdefghjklmnopqrstuvwxyz");
print(r == "");

r = new RegExp ("[^A-Z]*").exec("abcdefghjklmnopqrstuvwxyz");
print(r == "abcdefghjklmnopqrstuvwxyz");

r = new RegExp ("\\d*").exec("abcdefghjklmnopqrstuvwxyz");
print(r == "");

r = new RegExp ("\\D*").exec("abcdefghjklmnopqrstuvwxyz");
print(r == "abcdefghjklmnopqrstuvwxyz");

r = new RegExp ("\\w*").exec("abcdefghjklmnopqrstuvwxyz");
print(r == "abcdefghjklmnopqrstuvwxyz");

r = new RegExp ("\\W*").exec("abcdefghjklmnopqrstuvwxyz");
print(r == "");

r = new RegExp ("\\s*").exec("abcdefghjklmnopqrstuvwxyz");
print(r == "");

r = new RegExp ("\\S*").exec("abcdefghjklmnopqrstuvwxyz");
print(r == "abcdefghjklmnopqrstuvwxyz");

r = new RegExp ("[\\d]*").exec("abcdefghjklmnopqrstuvwxyz");
print(r == "");

r = new RegExp ("[\\D]*").exec("abcdefghjklmnopqrstuvwxyz");
print(r == "abcdefghjklmnopqrstuvwxyz");

r = new RegExp ("[\\w]*").exec("abcdefghjklmnopqrstuvwxyz");
print(r == "abcdefghjklmnopqrstuvwxyz");

r = new RegExp ("[\\W]*").exec("abcdefghjklmnopqrstuvwxyz");
print(r == "");

r = new RegExp ("[\\s]*").exec("abcdefghjklmnopqrstuvwxyz");
print(r == "");

r = new RegExp ("[\\S]*").exec("abcdefghjklmnopqrstuvwxyz");
print(r == "abcdefghjklmnopqrstuvwxyz");

r = new RegExp ("[^\\d]*").exec("abcdefghjklmnopqrstuvwxyz");
print(r == "abcdefghjklmnopqrstuvwxyz");

r = new RegExp ("[^\\D]*").exec("abcdefghjklmnopqrstuvwxyz");
print(r == "");

r = new RegExp ("[^\\w]*").exec("abcdefghjklmnopqrstuvwxyz");
print(r == "");

r = new RegExp ("[^\\W]*").exec("abcdefghjklmnopqrstuvwxyz");
print(r == "abcdefghjklmnopqrstuvwxyz");

r = new RegExp ("[^\\s]*").exec("abcdefghjklmnopqrstuvwxyz");
print(r == "abcdefghjklmnopqrstuvwxyz");

r = new RegExp ("[^\\S]*").exec("abcdefghjklmnopqrstuvwxyz");
print(r == "");

r = new RegExp ("\\d*").exec("0123456789");
print(r == "0123456789");

try
{
  r = new RegExp("[");
  print(false);
}
catch (e)
{
  print(e instanceof SyntaxError);
}

try
{
  r = new RegExp("[\\");
  print(false);
}
catch (e)
{
  print(e instanceof SyntaxError);
}

r = new RegExp ("^[\\u0061-\\u007a]+$").exec("abcdefghjklmnopqrstuvwxyz");
print(r == "abcdefghjklmnopqrstuvwxyz");

r = new RegExp ("^[\\u0061-\\u007a]+").exec("abcdefghjklmnopqrstuvwxyz");
print(r == "abcdefghjklmnopqrstuvwxyz");

r = new RegExp ("[\\u0061-\\u007a]+$").exec("abcdefghjklmnopqrstuvwxyz");
print(r == "abcdefghjklmnopqrstuvwxyz");

r = new RegExp ("^[\\x61-\\x7a]+$").exec("abcdefghjklmnopqrstuvwxyz");
print(r == "abcdefghjklmnopqrstuvwxyz");

r = new RegExp ("^[\\x61-\\x7a]+").exec("abcdefghjklmnopqrstuvwxyz");
print(r == "abcdefghjklmnopqrstuvwxyz");

r = new RegExp ("[\\x61-\\x7a]+$").exec("abcdefghjklmnopqrstuvwxyz");
print(r == "abcdefghjklmnopqrstuvwxyz");

r = new RegExp("[\\u0800-\\uffff]", "g");
print(r.test ("\uffff"));
print(!r.test ("\uffff"));

r = new RegExp("[\0]");
print(r.test ("\0"));
print(!r.test ("0"));

r = new RegExp("[\0-\1]");
print(r.test ("\1"));
