



assertNull(/a\P{Any}a/u.exec("a\u{d83d}a"));
assertEquals(["a\u{d83d}a"], /a\p{Any}a/u.exec("a\u{d83d}a"));
assertEquals(["a\u{d83d}a"], /(?:a\P{Any}a|a\p{Any}a)/u.exec("a\u{d83d}a"));
assertNull(/a[\P{Any}]a/u.exec("a\u{d83d}a"));
assertEquals(["a\u{d83d}a"], /a[^\P{Any}]a/u.exec("a\u{d83d}a"));
assertEquals(["a\u{d83d}a"], /a[^\P{Any}x]a/u.exec("a\u{d83d}a"));
assertNull(/a[^\P{Any}x]a/u.exec("axa"));
