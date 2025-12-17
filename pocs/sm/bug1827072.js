print(() => newString("", { capacity: 1 }));
print(() => newString("x", { capacity: 2 }));


const nonInlineLinear = "123456789012345678901234567890";
print(nonInlineLinear.length, 30);

newString(nonInlineLinear, { capacity: 29, tenured: true });
newString(nonInlineLinear, { capacity: 30, tenured: true });
newString(nonInlineLinear, { capacity: 31, tenured: true });

function print(f) {
  try {
    f();
  } catch {
    return;
  }
  throw new Error("missing error");
}
