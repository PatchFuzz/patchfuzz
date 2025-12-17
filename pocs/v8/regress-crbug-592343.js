var r = /[^\u{1}-\u{1000}\u{1002}-\u{2000}]/u;
print(r.test("\u{0}"));
print(r.test("\u{1}"));
print(r.test("\u{1000}"));
print(r.test("\u{1001}"));
print(r.test("\u{1002}"));
print(r.test("\u{2000}"));
print(r.test("\u{2001}"));
