













var str1 = 'bar\nexample foo example';
var str2 = 'bare\nxample foo example';
var regex_with_dotAll_flag = new RegExp ('bar.example','s');
var regex_without_dotAll_flag = new RegExp ('bar.example');


assert (regex_with_dotAll_flag.dotAll == true);
assert (regex_without_dotAll_flag.dotAll == false);


assert (str1.replace (regex_with_dotAll_flag,'') == " foo example");
assert (str1.replace (regex_without_dotAll_flag,'') == str1);
assert (str2.replace (regex_with_dotAll_flag, "") == str2);


for (let re of [/^.$/su, /^.$/sum]) {
  assert (re.test("a"));
  assert (re.test("3"));
  assert (re.test("π"));
  assert (re.test("\u2027"));
  assert (re.test("\u0085"));
  assert (re.test("\v"));
  assert (re.test("\f"));
  assert (re.test("\u180E"));
  assert (re.test("\u{10300}"));
  assert (re.test("\n"));
  assert (re.test("\r"));
  assert (re.test("\u2028"));
  assert (re.test("\u2029"));
  assert (re.test("\uD800"));
  assert (re.test("\uDFFF"));
}
