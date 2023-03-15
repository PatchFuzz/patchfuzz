



const s = "x";

print(/(?<\ud835\udc9c>.)/.exec(s).groups["\u{1d49c}"], s);
print(/(?<\ud835\udc9c>.)/u.exec(s).groups["\u{1d49c}"], s);
print(/(?<\u{1d49c}>.)/.exec(s).groups["\u{1d49c}"], s);
print(/(?<\u{1d49c}>.)/u.exec(s).groups["\u{1d49c}"], s);
print(/(?<𝒜>.)/.exec(s).groups["\u{1d49c}"], s);
print(/(?<𝒜>.)/u.exec(s).groups["\u{1d49c}"], s);
