



const s = "x";

assertEquals(/(?<\ud835\udc9c>.)/.exec(s).groups["\u{1d49c}"], s);
assertEquals(/(?<\ud835\udc9c>.)/u.exec(s).groups["\u{1d49c}"], s);
assertEquals(/(?<\u{1d49c}>.)/.exec(s).groups["\u{1d49c}"], s);
assertEquals(/(?<\u{1d49c}>.)/u.exec(s).groups["\u{1d49c}"], s);
assertEquals(/(?<𝒜>.)/.exec(s).groups["\u{1d49c}"], s);
assertEquals(/(?<𝒜>.)/u.exec(s).groups["\u{1d49c}"], s);
