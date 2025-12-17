var text = 'x';
assert (text.charAt(0) === "x");
assert (text.charAt(-0.1) === "x");
assert (text.charAt(-0.5) === "x");
assert (text.charAt(-0.9) === "x");
assert (text.charAt(0.85) === "x");

assert (text.charAt(-0.5) !== "");
assert (text.charAt(0.85) !== "");
