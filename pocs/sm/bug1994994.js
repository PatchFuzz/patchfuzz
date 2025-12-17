const length = 32767;
const pattern_body = "^" + "a".repeat(length);
const pattern = new RegExp("(?<=" + pattern_body + ")", "m");
let caught = undefined;
try {
  pattern.exec("");
} catch (e) { caught = e; }
print(caught?.message, "regexp too big");
