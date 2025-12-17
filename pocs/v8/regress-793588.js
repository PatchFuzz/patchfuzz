print(/a\P{Any}a/u.exec("a\u{d83d}a"));
print(["a\u{d83d}a"], /a\p{Any}a/u.exec("a\u{d83d}a"));
print(["a\u{d83d}a"], /(?:a\P{Any}a|a\p{Any}a)/u.exec("a\u{d83d}a"));
print(/a[\P{Any}]a/u.exec("a\u{d83d}a"));
print(["a\u{d83d}a"], /a[^\P{Any}]a/u.exec("a\u{d83d}a"));
print(["a\u{d83d}a"], /a[^\P{Any}x]a/u.exec("a\u{d83d}a"));
print(/a[^\P{Any}x]a/u.exec("axa"));
