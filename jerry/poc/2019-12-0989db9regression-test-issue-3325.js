













var text = 'x';
print(text.charAt(0) === "x");
print(text.charAt(-0.1) === "x");
print(text.charAt(-0.5) === "x");
print(text.charAt(-0.9) === "x");
print(text.charAt(0.85) === "x");

print(text.charAt(-0.5) !== "");
print(text.charAt(0.85) !== "");
